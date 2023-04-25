import * as React from 'react';

import { ICollection } from '@/interfaces/collection.interface';

export default function BreadCrumbs({data, onClick}) {
  return (
    <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <svg onClick={() => onClick()} aria-hidden="true" className="w-4 h-4 mr-2 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        { 
            data.map((collection: ICollection, index: number) => {
              return (
                <li className="cursor-pointer inline-flex items-center space-x-1 md:space-x-3" key={index} onClick={() => onClick(collection)}>
                { 
                  index === 0 ? 
                  '': 
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                }
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <span className="font-medium">{collection.name}</span>
                </a>
              </li>
              )
            })
        }
      </ol>
    </nav>
  )
}