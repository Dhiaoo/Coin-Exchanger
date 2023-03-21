import React, { useEffect} from 'react'
import Footer from '../HomePage/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function News() {


  return (
   <>
    <div className='container border border-2 p-5 m-5 rounded' style={{height:700+'px', overflowX:'scroll', backgroundColor:'#f7f6f6'}}>

    <div>
      <div className="row " style={{ overflowY: 'scroll', height: 100 + '%' }}>
        <div className="col-4">
          <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a className="p-1 rounded border" href="#simple-list-item-1" style={{ textDecoration: 'none' , color:'black'}}>First News</a>
            <a className="p-1 rounded border" href="#simple-list-item-2" style={{ textDecoration: 'none' , color:'black'}}>Second News</a>
            <a className="p-1 rounded border" href="#simple-list-item-3" style={{ textDecoration: 'none' , color:'black'}}>Third News</a>
            <a className="p-1 rounded border" href="#simple-list-item-4" style={{ textDecoration: 'none' , color:'black'}}>Fourth News</a>
            <a className="p-1 rounded border" href="#simple-list-item-5" style={{ textDecoration: 'none' , color:'black'}}>Fiveth News</a>
            <a className="p-1 rounded border" href="#simple-list-item-6" style={{ textDecoration: 'none' , color:'black'}}>Sixeth News</a>
          </div>
        </div>
        <div className="col-8">
          <div id="navbar-example">
            <h4 id="simple-list-item-1">Item 1</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            <h4 id="simple-list-item-2">Item 2</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            <h4 id="simple-list-item-3">Item 3</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            <h4 id="simple-list-item-4">Item 4</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            <h4 id="simple-list-item-5">Item 5</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            <h4 id="simple-list-item-6">Item 6</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
          </div>
          </div>
          </div>
          </div>

    </div>
        <Footer />
   </>
  )
}
export default News;
