import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Reviews({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        see Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
          {
            reviewData.map(data=>
                <div>
                   <h5>{data.name}</h5>
                   <h5>{data.date}</h5>
                   <h5>{data.rating}</h5>
                   <h5>{data.comments}</h5>


                </div>
                )
            }
            
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Reviews