                //------------------------------------------------------------------------------------------------------------
                //Skrypt do karty numer 6
                var zakladka_1 = document.querySelector(".zakladka_1_karta_6");
                var zakladka_2 = document.querySelector(".zakladka_2_karta_6");
                var zakladka_3 = document.querySelector(".zakladka_3_karta_6");

                var wszystkie_zakladki_karta_6 = document.querySelectorAll(".tab");

                var Content_zakladka_karta_6 = document.querySelector(".tab-content");

                var choosenTab;


                zakladka_1.addEventListener("click", function(){
                    Content_zakladka_karta_6.innerHTML="<h3 style='text-align: center;'>Karta 6.1</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                    updateActiveState(zakladka_1);
                })

                zakladka_2.addEventListener("click", function(){
                    Content_zakladka_karta_6.innerHTML="<h3 style='text-align: center;'>Karta 6.2</h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
                    updateActiveState(zakladka_2);
                })

                zakladka_3.addEventListener("click", function(){
                    Content_zakladka_karta_6.innerHTML="<h3 style='text-align: center;'>Karta 6.3</h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
                    updateActiveState(zakladka_3);
                })

                function updateActiveState(activeTab_karta_6){
                    wszystkie_zakladki_karta_6.forEach(function(zakladka_karta_6){
                        if(zakladka_karta_6 != activeTab_karta_6){
                            zakladka_karta_6.classList.remove("active");
                        }
                        else{
                            zakladka_karta_6.classList.add("active");
                        }
                    })
                }


                //------------------------------------------------------------------------------------------------------------------------
                //Skrypt karta numer 7
                //------------------------------------------------------------------------------------------------------------
                //Skrypt do karty numer 7
                var zakladka_1_karta_7 = document.querySelector(".zakladka_1_karta_7");
                var zakladka_2_karta_7 = document.querySelector(".zakladka_2_karta_7");
                var zakladka_3_karta_7 = document.querySelector(".zakladka_3_karta_7");

                var wszystkie_zakladki_karta_7 = document.querySelectorAll(".tab_karta_7");

                var Content_zakladka_karta_7 = document.querySelector(".tab-content_karta_7");

                var choosenTab;


                zakladka_1_karta_7.addEventListener("click", function(){
                    Content_zakladka_karta_7.innerHTML="<h3 style='text-align: center;'>Karta 7.1</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                    updateActiveState(zakladka_1_karta_7);
                })

                zakladka_2_karta_7.addEventListener("click", function(){
                    Content_zakladka_karta_7.innerHTML="<h3 style='text-align: center;'>Karta 7.2</h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
                    updateActiveState(zakladka_2_karta_7);
                })

                zakladka_3_karta_7.addEventListener("click", function(){
                    Content_zakladka_karta_7.innerHTML="<h3 style='text-align: center;'>Karta 7.3</h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
                    updateActiveState(zakladka_3_karta_7);
                })

                function updateActiveState(activeTab_karta_7){
                    wszystkie_zakladki_karta_7.forEach(function(zakladka_karta_7){
                        if(zakladka_karta_7 != activeTab_karta_7){
                            zakladka_karta_7.classList.remove("active");
                        }
                        else{
                            zakladka_karta_7.classList.add("active");
                        }
                    })
                }






                //------------------------------------------------------------------------------------------------------------------------
                //Skrypt karta numer 8
                //------------------------------------------------------------------------------------------------------------
                //Skrypt do karty numer 8
                var zakladka_1_karta_8 = document.querySelector(".zakladka_1_karta_8");
                var zakladka_2_karta_8 = document.querySelector(".zakladka_2_karta_8");
                var zakladka_3_karta_8 = document.querySelector(".zakladka_3_karta_8");

                var wszystkie_zakladki_karta_8 = document.querySelectorAll(".tab_karta_8");

                var Content_zakladka_karta_8 = document.querySelector(".tab-content_karta_8");

                var choosenTab;


                zakladka_1_karta_8.addEventListener("click", function(){
                    Content_zakladka_karta_8.innerHTML="<h3 style='text-align: center;'>Karta 8.1</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                    updateActiveState(zakladka_1_karta_8);
                })

                zakladka_2_karta_8.addEventListener("click", function(){
                    Content_zakladka_karta_8.innerHTML="<h3 style='text-align: center;'>Karta 8.2</h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
                    updateActiveState(zakladka_2_karta_8);
                })

                zakladka_3_karta_8.addEventListener("click", function(){
                    Content_zakladka_karta_8.innerHTML="<h3 style='text-align: center;'>Karta 8.3</h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
                    updateActiveState(zakladka_3_karta_8);
                })

                function updateActiveState(activeTab_karta_8){
                    wszystkie_zakladki_karta_8.forEach(function(zakladka_karta_8){
                        if(zakladka_karta_8 != activeTab_karta_8){
                            zakladka_karta_8.classList.remove("active");
                        }
                        else{
                            zakladka_karta_8.classList.add("active");
                        }
                    })
                }