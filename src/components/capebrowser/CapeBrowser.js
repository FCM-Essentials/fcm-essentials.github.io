import './CapeBrowser.css'
import CapeDisplay from './CapeDisplay';

function CapeBrowser() {
    return <>
        {<CapeDisplay textureUrl={"https://server-710z.onrender.com/cape/golden"} azimuth={45} elevation={45}></CapeDisplay>}
    </>
}

export default CapeBrowser;
