import ImagePicker from 'react-native-image-picker';

export class PickImage {

    static get = () => {

        return new Promise((resolve, reject) => {
            const options = {
                title: 'Pick Image',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
                quality: 0.7,
                maxWidth: 500,
                maxHeight: 500,
            };

            ImagePicker.showImagePicker(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = {uri: response.uri};
                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                    resolve(source)
                }
            });
        })
    }
}
