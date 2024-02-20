import Widget from "./components/Widget";
import QA from "./components/QA";
import PromotedProducts from "./components/PromotedProducts";
import ReviewsCarousel from "./components/ReviewsCarousel";
import SEO from "./components/SEO";
import ReviewsTab from "./components/ReviewsTab";
import StarRating from "./components/StarRating";
import UgcGallery from "./components/UgcGallery";


function App() {
  //Instance ID
  let InstanceId_Widget = "607215";
  let InstanceId_QA = "";
  let InstanceId_SEO = "607213";
  let InstanceId_Carousel = "607212";
  let InstanceId_StarRating = "607214";
  let InstanceId_PromotedProd = "";
  let InstanceId_UgcGallery = "";
  let InstanceId_ReviewsTab = "";

  //Product ID
  let ProductId = "4f1f766b-48c8-4c14-9dfd-93d4de231e71";

  //Clipboard text here.
  let ClipBoardHeading = "Follow these steps to add this";
  let ScriptClipboard = "1. Add the following to your <head> tag.";
  let ScriptClipboardNote =
    "If you already have this script, please disregard since using one script will work for all of the Yotpo code snippets";
  let SnippetClipboard =
    "2. Add the following code snippet to your product page.";
  let SnippetClipboardNote =
    "Make sure you replace each data element with the appropriate values of your website and product attributes.";

  return (
    <>
      <div className="wrapper">
        <div class="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            productid={ProductId}
            active="true"
            heading="Reviews Widget"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <QA
            instanceid={InstanceId_QA}
            productid={ProductId}
            active="false"
            heading="Q&A"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <SEO
            instanceid={InstanceId_SEO}
            productid={ProductId}
            active="false"
            heading="SEO"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsCarousel
            instanceid={InstanceId_Carousel}
            productid={ProductId}
            active="false"
            heading="Reviews Carousel"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <StarRating
            instanceid={InstanceId_StarRating}
            productid={ProductId}
            active="false"
            heading="Star Rating"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            productid={ProductId}
            active="false"
            heading="Promoted Products"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <UgcGallery
            instanceid={InstanceId_UgcGallery}
            productid={ProductId}
            active="false"
            heading="UGC Gallery"
            clipboardheading={ClipBoardHeading}
            clipboardscript={ScriptClipboard}
            clipboardscriptnote={ScriptClipboardNote}
            clipboardsnippet={SnippetClipboard}
            clipboardsnippetnote={SnippetClipboardNote}
          />

          <ReviewsTab 
            instanceid={InstanceId_ReviewsTab} 
            productid={ProductId} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
