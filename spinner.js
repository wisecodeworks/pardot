document.addEventListener('DOMContentLoaded', function() {
            const submit = document.getElementsByClassName("submit")[0];
            //if (submit) {
                submit.onclick = function() {
                    const submitBtn = document.getElementsByClassName("submit")[0];
                    submitBtn.style.color = 'hsla(0, 0%, 100%, 0)';
                    submitBtn.classList.add("submit--spinner");
                };
            //};
        });
