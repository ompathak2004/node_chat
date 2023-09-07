// const $files = document.querySelector('#file-template')

// socket.on('receiveFile', (data) => {
//     const fileBlob = b64toBlob(data.data, data.type);
//     const url = URL.createObjectURL(fileBlob);

//     const link = document.createElement('a');
//     link.href = url;
//     link.download = data.filename;
//     link.innerText = `Download ${data.filename}`;
    
//     document.body.appendChild(link);

//     const html = Mustache.render(file-template, {
//         username: message.username,
//         message: message.text,
//         createdAt: moment(message.createdAt).format('h:mm a')
//     })
//     $messages.insertAdjacentHTML('beforeend', html)
// });


// function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
//     const byteCharacters = atob(b64Data);
//     const byteArrays = [];

//     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//         const slice = byteCharacters.slice(offset, offset + sliceSize);

//         const byteNumbers = new Array(slice.length);
//         for (let i = 0; i < slice.length; i++) {
//             byteNumbers[i] = slice.charCodeAt(i);
//         }

//         const byteArray = new Uint8Array(byteNumbers);
//         byteArrays.push(byteArray);
//     }

//     const blob = new Blob(byteArrays, { type: contentType });
//     return blob;
// }



//   <input type="file" id="fileInput">
//                 <button id="sendButton">Send File</button>
//                 <button id="send-location">Send location</button>







// ##################3index.js#################3

//     socket.on('sendFile', (data) => {
//         const user = getUser(socket.id)
//         socket.broadcast.emit('receiveFile', data);
//         callback()
//     })


