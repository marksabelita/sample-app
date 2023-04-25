import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Button from '@/components/layout/Button';
import Layout from '@/components/layout/Layout';
import Lists from '@/components/layout/Lists';
import Modal from '@/components/layout/Modal';

import { ICollection, IStateData } from '@/interfaces/collection.interface';
import { 
  onCreateCollection,
  onGetCollection,
  onGetCollections, 
  onUpdateCollection,
  onCreateBook,
  onUpdateBook,
} from '@/redux/actions';
import { REFRESH_BOOK } from '@/constant/actions';
import { AppDispatch } from '@/redux/store';

export default function HomePage() {
	const { 
    collections,
    collection, 
    created: createdCollection, 
    updated: updatedCollection
  } = useSelector(({ collection }: IStateData) => collection);

  const { 
    created: createdBook, 
    updated: updatedBook
  } = useSelector(({ book }: IStateData) => book);

  const [ collectionsLists, setCollectionData] = useState<ICollection[]>([]);
  const [ breadCrumbsLists, setBreadCrumbsData] = useState<ICollection[]>([]);
  const [ displayCreateModal, setDisplayCreateModal ] = useState(false);
  const [ activeAction, setActiveAction ] = useState('location')
  const dispatch = useDispatch<AppDispatch>();

  const onClickCrumbs = (item: ICollection) => {
    if(item?.id) {
      onGetCollection(item.id)
      dispatch(onGetCollection(item.id));
    } else {
      dispatch(onGetCollections());
    }
  }

  const onClickCollection = (item: ICollection) => {
    if(item) {
      onGetCollection(item.id)
      dispatch(onGetCollection(item.id)); 
    }
  } 

  const onClickSubmit = (data) => {
    if(activeAction === 'location') {
      dispatch(onCreateCollection({
        name: data,
        ...(collection?.id ? { parent: {id: collection.id} } : {}),
      }))
    } else {
      dispatch(onCreateBook({
        name: data,
        ...(collection?.id ? { file_location: {id: collection.id} } : {}),
      }))
    }
    setDisplayCreateModal(false)
  }

  const onClickAddLocation = () => {
    setActiveAction('location')
    setDisplayCreateModal(true)
  }

  const onClickAddBook = () => {
    setActiveAction('book')
    setDisplayCreateModal(true)
  }

  const onClose = (bool) => {
    setDisplayCreateModal(bool)
  }

  const onDrop = (parent, child) => {
    if(child.type == 'location') {
      dispatch(onUpdateCollection(child.id, {
        parent: {id: parent.id} 
      }))
    } else {
      dispatch(onUpdateBook(child.id, {
        file_location: {id: parent.id}
      }))
    }
  }

  useEffect(() => {
		dispatch(onGetCollections()); 
	}, [dispatch]);

  useEffect(() => {
    setBreadCrumbsData(collection?.breadCrumbs ?? [])
    setCollectionData(collection?.collections ?? [])
  }, [collection])

  useEffect(() => {
    setCollectionData(collections ?? []) 
  }, [collections])

  useEffect(() => {
    if(createdCollection || updatedCollection || createdBook || updatedBook) {
      if(collection?.id) {
        dispatch(onGetCollection(collection.id))
        dispatch({type: REFRESH_BOOK})
      } else {
        dispatch(onGetCollections())
        dispatch({type: REFRESH_BOOK})
      }
    }
  }, [createdCollection, updatedCollection, createdBook, updatedBook]) 

  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col py-12 '>
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-2">
                <BreadCrumbs data={breadCrumbsLists} onClick={onClickCrumbs}></BreadCrumbs>
              </div>
              <div className="col-span-1">
                <Button onClick={onClickAddLocation}>Add location</Button>
                <Button onClick={onClickAddBook}>Add Book</Button>
              </div>
            </div>
            <Lists data={collectionsLists} onClick={onClickCollection} onDrop={onDrop}></Lists>
          </div>
        </section>

        <Modal display={displayCreateModal} onClose={onClose} onSubmit={onClickSubmit}></Modal>
      </main>
    </Layout>
  );
}
