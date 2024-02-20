import Widget from "./components/Widget";

function App() {
  //Instance ID
  let InstanceId_Widget = "513953";

  //Product ID
  let ProductId = "";

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
        </div>
      </div>
    </>
  );
}

export default App;
