const displayErrorMessage = (error: any) => {
    let message = "";
    if(error && error.response && error.response.data && error.response.data.message) {
        message = error.response.data.message;
    }

    if(error && error.data && error.data.message) {
        message = error.message;
    }

    if(error & error.message) {
        message = error.message;
    }

    return (message) ? message : "Something went wrong, Please try again!";
}

export  { displayErrorMessage };