import { useNavigate } from "react-router-dom"
import { useState, useEffect , axios} from 'react'
function Hamkor() {
    const navigate = useNavigate();
    const [fish, setPrice] = useState([])
    const [email, setTitle] = useState([])
    const [tel, setTel] = useState([])
    const [sharx, setSharx] = useState([])
    const HandleClic = (e) => {
        const kere = {
            fish: fish,
            email: email,
            tel: tel,
            sharx: sharx,
            img: videoSelect

        }
        const response = axios.post("http://localhost:8000/posts", kere)
        navigate("/")
        console.log(response);
    }
    // 

    const [videoSelect, setvideoSelect] = useState()
    const [loading2, setLoading2] = useState(false)
    const [VideoData, setVideoData] = useState([])
    const Change = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "v8gxbibt")
        setLoading2(true)
        const postVideo2 = async () => {
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/dugfn5qgj/upload", formData)
                setvideoSelect(response?.data.secure_url)
                console.log(response?.data.secure_url);
                setLoading2(false)
            } catch (error) {
                console.error(error);
            }
        }
        postVideo2()


    }

    useEffect(() => {
        fetch("http://localhost:8000/posts")
            .then(res => res.json())
            .then(result => setVideoData(result))
    }, [VideoData])

    const HandleClick2 = async (e) => {
        e.preventDefault();
        const body = {
            fish: fish,
            email: email,
            tel: tel,
            sharx: sharx,
            img: videoSelect
        }
        const resPost = axios.post("http://localhost:8000/posts", body)
        window.localStorage.setItem("id", e.target.value)
        console.log(resPost);
    }
    return (
        <>
            {/* <div className="container">
                <form className="ham_box">
                    
                    <input type="text" placeholder="F.I.SH" className="fish" />
                    <input type="text" placeholder="TEL:" className="fish" />
                    <input type="text" placeholder="Email" className="fish" />
                    <input type="text" placeholder="Sharx" className="fish" />
                    <button className="ham_but">Resume Yuborish</button>
                </form>
                
            </div> */}




         
            <ul className="cont_ul">
                <li className="cont_lic">
                    <ul className="ul_c">
                     
                        <li className="li_c">

                        </li>

                    </ul>
                </li>
                <li className="cont_li">
                    {/*  */}





                    <form onSubmit={HandleClick2}>
                        <input type="file" id="file" onChange={Change} />
                        <label className="custom-file-upload">
                            <span className="span-download">
                                <ion-icon name="cloud-download-outline"></ion-icon>
                            </span>
                           
                        </label>
                        {
                            loading2 ? (<>
                                <span>loading</span>
                            </>) : null
                        }
                        <div className="g">
                            {VideoData.map((elem, index) =>
                                <img src={elem.img} key={index} width={400} height={250} />
                            )}
                            <div className="ham_box">
                                <input type="text" placeholder="F.I.SH" onChange={(e) => setPrice(e.target.value)} className="fish" />
                                <input type="text" placeholder="TEL:" onChange={(e) => setTel(e.target.value)} className="fish" />
                                <input type="text" placeholder="Email" onChange={(e) => setTitle(e.target.value)} className="fish" />
                                <input type="text" placeholder="Sharx" onChange={(e) => setSharx(e.target.value)} className="fish" />

                                <button className="ham_but" onClick={HandleClic} >add</button>
                            </div>
                        </div>
                        <button type="submit"> add</button>
                    </form>

                </li>
            </ul >
        </>
    )
}
export default Hamkor