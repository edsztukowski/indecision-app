const app = {
  title: "Build It",
  details: "lorem ipsum blah blah blah",
  show: false
}

const showWords = () => {
  app.show = !app.show;
  renderBuildIt();
}

const appRoot = document.getElementById("app");

const renderBuildIt = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showWords}>
        {app.show ? 'hide details' : 'show details'}
      </button>

      {app.show && <p>{app.details}</p>}
    </div>
   

  );
  ReactDOM.render(template, appRoot);

}

renderBuildIt();