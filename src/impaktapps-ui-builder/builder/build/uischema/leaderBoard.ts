export default {
    type: "WrapperLayout",
    config: {
        main: {
            rowSpacing: 3,
            header: true,
            label: "LeaderBoard",
            divider: true,
        },
        style:{wrapperStyle:{
            height: {xs:850,sm:1000}
        }},
        wrapperStyle: {
            position: "relative",
            width: "100%",
            // height: {xs:800,sm:1000}
        }
    },
    elements: [
        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/firstImage",
            config: {
                main: {
                    url: "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
                },
                containerStyle: {
                    objectFit: "cover",
                    position: "absolute",
                    top: { xs: "90px", "md": "60px" },
                    left: { "xs": "calc(50% - 50px)", "sm": "calc(50% - 50px)", "md": "calc(50% - 100px)" },
                    width: { "xs": "100px", "sm": "100px", "md": "200px" },
                    border: "5px solid rgb(179, 198, 255)",
                    height: { "xs": "100px", "sm": "100px", "md": "200px" },
                    borderRadius: "50%"

                },
                style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%"

                },
                layout: 6,
            },
            options: {
                widget: "Image",
            },
        },

        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/secondImage",
            config: {
                main: {
                    url: "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
                },
                containerStyle: {
                    objectFit: "cover",
                    position: "absolute",
                    top: { xs: "160px", "md": "130px" },
                    left: { "xs": "calc(25% - 45px)", "sm": "calc(25% - 45px)", "md": "calc(25% - 90px)" },
                    width: { "xs": "80px", "sm": "80px", "md": "180px" },
                    border: "5px solid rgb(179, 198, 255)",
                    height: { "xs": "80px", "sm": "80px", "md": "180px" },
                    borderRadius: "50%"

                },
                style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%"

                },
                layout: 6,
            },
            options: {
                widget: "Image",
            },
        },
        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/thirdImage",
            config: {
                main: {
                    url: "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
                },
                containerStyle: {
                    objectFit: "cover",
                    position: "absolute",
                    top: { xs: "160px", "md": "130px" },
                    left: { "xs": "calc(75% - 42.5px)", "sm": "calc(75% - 42.5px)", "md": "calc(75% - 85px)" },
                    width: { "xs": "80px", "sm": "80px", "md": "180px" },
                    border: "5px solid rgb(179, 198, 255)",
                    height: { "xs": "80px", "sm": "80px", "md": "180px" },
                    borderRadius: "50%"

                },
                style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%"

                },
                layout: 6,
            },
            options: {
                widget: "Image",
            },
        },
        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/firstName",
            config: {
                main: {
                    heading: "Satendra Raghav",
                },
                style: {
                    objectFit: "cover",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    top: { xs: "190px", md: "270px" },
                    fontSize: { xs: "12px", md: "20px" },
                    left: 'calc(50% - 90px)',
                    width: "180px",
                    fontWeight: "bold",
                    borderRadius: "50%",
                    zIndex: 7

                },
                layout: 6,
            },
            options: {
                widget: "Box",
            },
        },
        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/secondName",
            config: {
                main: {
                    heading: "Satendra Raghav",
                },
                style: {
                    objectFit: "cover",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    top: { xs: "240px", md: "320px" },
                    fontSize: { xs: "12px", md: "20px" },
                    left: 'calc(25% - 90px)',
                    width: "180px",
                    fontWeight: "bold",
                    borderRadius: "50%"
                },
                layout: 6,
            },
            options: {
                widget: "Box",
            },
        },
        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/thirdName",
            config: {
                main: {
                    heading: "Satendra Raghav",
                },
                style: {
                    objectFit: "cover",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    top: { xs: "240px", md: "320px" },
                    fontSize: { xs: "12px", md: "20px" },
                    left: 'calc(75% - 90px)',
                    width: "180px",
                    fontWeight: "bold",
                    borderRadius: "50%"
                },
                layout: 6,
            },
            options: {
                widget: "Box",
            },
        },




        {
            type: "Control",
            scope: "#/properties/econd",
            config: {
                main: {
                    heading: "2",
                },
                style: {
                    objectFit: "cover",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textShadow: "2px 2px 5px #5065C7",
                    background: "green",
                    color: "white",
                    top: { xs: "225px", md: "280px" },
                    fontSize: { xs: "12px", md: "16px" },
                    left: { xs: 'calc(25% - 12px)', md: "calc(25% - 16px)" },
                    width: { xs: "20px", md: "40px" },
                    border: { xs: "2px solid rgb(179, 198, 255)", md: "5px solid rgb(179, 198, 255)" },
                    height: { xs: "20px", md: "40px" },
                    '@keyframes rotateAnimation': {
                        from: {
                            transform: 'rotate(0deg)',
                        },
                        to: {
                            transform: 'rotate(360deg)',
                        },
                    },
                    animation: 'rotateAnimation 4s infinite',
                    borderRadius: "50%",
                    zIndex: 5

                },
                layout: 6,
            },
            options: {
                widget: "Box",
            },
        },

        {
            type: "Control",
            scope: "#/properties/first",
            config: {
                main: {
                    heading: "1",
                },
                style: {
                    objectFit: "cover",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textShadow: "2px 2px 5px #5065C7",
                    background: "green",
                    color: "white",
                    top: { xs: "175px", md: "230px" },
                    fontSize: { xs: "12px", md: "16px" },
                    left: { xs: 'calc(50% - 12px)', md: "calc(50% - 16px)" },
                    '@keyframes rotateAnimation': {
                        from: {
                            transform: 'rotate(0deg)',
                        },
                        to: {
                            transform: 'rotate(360deg)',
                        },
                    },
                    animation: 'rotateAnimation 4s infinite',
                    width: { xs: "20px", md: "40px" },
                    border: { xs: "2px solid rgb(179, 198, 255)", md: "5px solid rgb(179, 198, 255)" },
                    height: { xs: "20px", md: "40px" },
                    borderRadius: "50%",
                    zIndex: 5


                },
                layout: 6,
            },
            options: {
                widget: "Box",
            },
        },
        {
            type: "Control",
            scope: "#/properties/third",
            config: {
                main: {
                    heading: "3",
                },
                style: {
                    objectFit: "cover",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textShadow: "2px 2px 5px #5065C7",
                    background: "green",
                    color: "white",
                    top: { xs: "225px", md: "280px" },
                    fontSize: { xs: "12px", md: "16px" },
                    left: { xs: 'calc(75% - 12px)', md: "calc(75% - 16px)" },
                    width: { xs: "20px", md: "40px" },
                    border: { xs: "2px solid rgb(179, 198, 255)", md: "5px solid rgb(179, 198, 255)" },
                    height: { xs: "20px", md: "40px" },

                    '@keyframes rotateAnimation': {
                        from: {
                            transform: 'rotate(0deg)',
                        },
                        to: {
                            transform: 'rotate(360deg)',
                        },
                    },
                    animation: 'rotateAnimation 4s infinite',
                    borderRadius: "50%",
                    zIndex: 5


                },
                layout: 6,
            },
            options: {
                widget: "Box",
            },
        },
        {
            type: "Control",
            scope: "#/properties/leaderBoard/properties/table",
            options: {
                widget: "Table",

            },
            elements: [],
            config: {
                style: {
                    tableHeadstyle: {
                        fontWeight: 900,
                        background: "rgb(179, 198, 255)"
                    },
                    position: "absolute",
                    top: { xs: "300px", sm: "300px", md: "390px", lg: "390px" },
                    // top:"390px",
                    border: "2px solid rgb(179, 198, 255)",
                    width: "95%",
                    left: "2.5%"

                },

                main: {
                    disableAction: true,
                    disableSelection: true,

                },
            },

        }
    ],
};