import storage from '@/components/firebase/firebaseConfig.js'
import { ref, listAll, deleteObject} from "firebase/storage";

const deleteFolder = (projectPath) => {
    return new Promise(function (resolve, reject) {
        let refo = ref(storage, projectPath);
        listAll(refo).then(dir => {
            dir.items.forEach(fileRef => {
                deleteObject(fileRef).then(() => {
                    console.log('deleted Succesfully')
                    resolve()
                    // File deleted successfully
                }).catch((error) => {
                    console.log(error)
                    reject()
                    // Uh-oh, an error occurred!
                });
            });
        }).then(()=>{
            resolve('deleted')
        }).catch(error => {
            console.log(error);
            reject()
        });
    })

};
export default deleteFolder