const app = {
  title: 'Indecision App',
  subtitle: 'Let computers think for you',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let count = 0;

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button className='btn'>+1</button>
  </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot );
