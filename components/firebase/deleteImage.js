import { deleteObject } from "firebase/storage";

function deleteImage (imageRef){
    return new Promise((resolve, reject)=>{
            // Delete the file
        deleteObject(imageRef).then(() => {
            console.log('deleted Succesfully')
            alert('deleted')
            resolve()
            // File deleted successfully
        }).catch((error) => {
            console.log(error)
            reject()
            // Uh-oh, an error occurred!
        });
    })

}
export default deleteImage