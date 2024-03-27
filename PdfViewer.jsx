import Pdf from './floor_plan.pdf'
import Videobg from '../assets/background-video.mp4'

export default function PdfViewer(){
    
    return(
       
       
        <div>
            <div>
            <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
            </div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PDF Viewer</title>
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: 'Arial', sans-serif;\n            text-align: center;\n            margin: 10px;\n        }\n\n        embed {\n            width: 100%;\n            height: 500px;\n;        }\n    " }} />
  <h1> QR for the requested model</h1>
  <embed src={Pdf} type="application/pdf" width="100%" height="800px" />
</div>


    )
    
}


