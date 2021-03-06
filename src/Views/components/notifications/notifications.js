import React from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';

const Notifications = ({ type, message, show }) => {
 const id=9
    const options = () => {
        switch (type) {
            case "info":
                toast.info(message,{
                    toastId:id
                })
                break;
                case "error":
                toast.error(message,{
                    toastId:id
                })
                break;
            default:
                toast.success(message,{
                    toastId:id
                })
                break;
        }
        return
    }

    return (

        options(),

        <div onLoad={options} >
            <ErrorBoundary >

                {show === true ?

                    <ToastContainer
                        className="text-center"
                        autoClose={6000}
                        position="top-center"
                        limit={1}
                        closeOnClick={false}
                        transition={Zoom}
                    />
                    : ''
                }
            </ErrorBoundary>
        </div >
    )
}

export default Notifications;