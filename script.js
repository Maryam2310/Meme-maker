
(function () {
    let imageUrl = document.querySelector('#imageUrl');
    let topTextValue = document.querySelector('#topText');
    let bottomTextValue = document.querySelector('#bottomText');
    let image = document.querySelector('.image');
    let memeTopText = document.querySelector('.top-text');
    let memeBottomText = document.querySelector('.bottom-text');

    let submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', () => {

        makeMeme();


    });


    urlIsValid = () => {
        let url = imageUrl.value;
        let pattern = /^(https:\/\/.*)/g;
        let result = pattern.test(url);
        if (result == true) {
            return true;
        } else {
            alert('please enter the correct url starting with https://');
            return false;
        }

    }



    makeMeme = () => {
        if (urlIsValid()) {


            if (topTextValue.value != '' && bottomTextValue.value != '') {

                image.src = imageUrl.value;
                memeTopText.innerText = topTextValue.value;
                memeBottomText.innerText = bottomTextValue.value;
                imageUrl.value = '';
                topTextValue.value = '';
                bottomTextValue.value = '';

            } else {
                alert('Please complete the form')
            }


        }

    }
})();

