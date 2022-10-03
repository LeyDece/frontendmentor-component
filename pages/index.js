import Image from "next/image"
import styled from "styled-components"


const HomePageSC = styled.div({
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const CardWrapper = styled.div({
    padding: "10px",
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: "10px",
    maxWidth: "200px",
    boxShadow: "rgba(17, 12, 20, 0.05) 0px 48px 100px 0px",
})

const CardDescription = styled.div({
    textAlign: "center",
    fontFamily: "Oswald",
    padding: "5px 15px",


    ".card-description-header": {
        fontWeight: 700,
        color: "hsl(218, 44%, 22%)",
        fontSize: "15px",
    },

    ".card-description-details": {
        color: "hsl(220, 15%, 55%)",
        fontSize: "10px",
        fontWeight: 400,
        paddingTop: "10px"

    }
})

const HomePage = () => {
    return <HomePageSC>
        <CardWrapper>
            <Image src="/images/image-qr-code.png" alt="qr-code-image" width={200} height={200} objectFit="contain" style={{
                borderRadius: "10px"
            }} />
            <CardDescription>
                <div className="card-description-head">
                    Improve your front-end skills by building projects
                </div>
                <div className="card-description-details">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </div>
            </CardDescription>
        </CardWrapper>
    </HomePageSC>
}

export default HomePage