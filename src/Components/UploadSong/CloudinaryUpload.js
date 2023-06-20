import { openUploadWidget } from "../Utils/CloudinaryService";



const CloudinaryUpload = ({ setUrl, setName }) => {

    const  uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget({
            cloudname: "dxd0msgk7",

            sources: ["local"],
        },
        function(error, result){
            if(!error && result.event === "Sucess"){
                setUrl(result.info.secure_url);
                setName(result.info.original_filename)
            } else {
                if(error) {
                    console.log(error);
                }
            }

        }
        );
        myUploadWidget.open();
    }
    return(
        <button
        className="bg-white text-black rounded-full p-4 font-semibold"
        onClick={uploadImageWidget}
        
        >
            Select Track

        </button>
    )
}
export default CloudinaryUpload;