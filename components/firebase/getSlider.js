import storage from '@/components/firebase/firebaseConfig.js'
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import React, { useState, useEffect } from 'react';

async function getSlider(){
    return new Promise(function (resolve, reject) {
        var storageRef = ref(storage, "slider/");
        var listURL = []
        // Now we get the references of these images
        listAll(storageRef).then(function(result) {
            result.items.forEach((itemRef) => {
                // All the items under listRef.
                getDownloadURL(itemRef).then((url)=>{
                    listURL.push({
                        uri: url,
                        ref:itemRef
                    })
                }).then(()=>{
                    resolve(listURL)
                })
                .catch((err)=>{
                    console.warn(err)
                })
            });
        })
        .catch(function(error) {
            // Handle any errors
            console.log(error)
        });
    })

}
export default getSlider