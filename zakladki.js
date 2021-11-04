var tab1 = document.querySelector(".tab1");
                var tab2 = document.querySelector(".tab2");
                var tab3 = document.querySelector(".tab3");

                var tabAll = document.querySelectorAll(".tab");

                var tabContent = document.querySelector(".tab-content");

                var choosenTab;


                tab1.addEventListener("click", function(){
                    tabContent.innerHTML="1zakładka";
                    updateActiveState(tab1);
                })

                tab2.addEventListener("click", function(){
                    tabContent.innerHTML="2zakładka";
                    updateActiveState(tab2);
                })

                tab3.addEventListener("click", function(){
                    tabContent.innerHTML="3zakładka";
                    updateActiveState(tab3);
                })

                function updateActiveState(activeTab){
                    tabAll.forEach(function(tab){
                        if(tab != activeTab){
                            tab.classList.remove("active");
                        }
                        else{
                            tab.classList.add("active");
                        }
                    })
                }