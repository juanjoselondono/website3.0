import storage from '@/components/firebase/firebaseConfig.js'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const handleUpload = (file, setPercent, path, setUrl) => {
    return new Promise(function (resolve, reject) {
        if (!file) {
        alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/${path}/${file.name}`);
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
        "state_changed",
        (snapshot) => {
        const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setPercent(percent);
        },
        (err) => {
            console.log(err)
            reject()
        },
        () => {
        // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url)
            console.log(url);
            if(setUrl != null){
                setUrl(url)
            }
        });
        }
        );
    })

};
export default handleUpload