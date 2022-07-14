import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    backgroundColor: "#f16564",
    showDownloadButton: false,
    showAutoplayButton: false,
  },
  caption: {
    showCaption: false,
  },
};

function DiscoverPersonPhotos(props) {
  return (
    <SRLWrapper options={options}>
      <div className="photos-container">
        <a href={`${props.photos[0]}/1920/1080`}>
          <img src={`${props.photos[0]}/340`} alt="Mateusz" />
        </a>
        <a href={`${props.photos[1]}/1920/1080`}>
          <img src={`${props.photos[1]}/340`} alt="Mateusz" />
        </a>
        <a href={`${props.photos[2]}/1920/1080`}>
          <img src={`${props.photos[2]}/340`} alt="Mateusz" />
        </a>
      </div>
    </SRLWrapper>
  );
}
export default DiscoverPersonPhotos;
