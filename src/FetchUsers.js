import React, { useState, useEffect } from 'react'
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'
import ReactRoundedImage from "react-rounded-image";

const url = `https://randomuser.me/api`

const FetchUsers = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = async () => {
    const resp = await fetch(url)
    const users = await resp.json()
    setUsers(users.results)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <section className="bg-gray-900 py-20 px-10 md:h-screen d-flex justify-content-center">
        {users.map((user) => {
          const {
            name: { title, first, last },
            location: {
              street: { number, name },
              city,
              state,
              country,
              postcode,
              coordinates: { latitude, longitude },
              timezone: { offset, description },
            },
            email,
            login: { uuid, username },
            dob: { date, age },
            phone,
            picture: { large },
          } = user

          return (




            <Card style={{ width: '18rem' }}
              key={uuid}
             className=" bg-danger text-center"
            >
          
              <div className="m-auto">
              <ReactRoundedImage 
          
          image={large}
          roundedColor="#66A5CC"
          imageWidth="120"
          imageHeight="120"
          roundedSize="8"
          borderRadius="70"
          style={{ paddingLeft: '40px'}}

        />
        </div>
        <Card.Title> {title}. {first} {last}</Card.Title>
        <Card.Text>
        <span className="font-bold">DOB:</span>{' '}
                  {moment(`${date}`).format('MMMM Do YYYY')}<br/>
                  Age: {age} Years<br/>

                    <AiOutlineMail className="mr-2 text-xl" /> {email}<br/>
                    <FaUserAlt className="mr-2 text-xl" /> {username}<br/>
                    <FaPhone className="mr-2 text-xl" /> {phone}

              


    </Card.Text>
             
            

              <div className="md:flex md:justify-between">
                <div>
                 
                  <p className="flex items-center my-3">
                   
                  </p>
                  <p className="flex items-center my-3">
           
                  </p>
                </div>

               
              </div>
           
              
              <Button variant="primary" onClick={() => fetchUserData()}>Next Person</Button>
            </Card>
          )
        })}
      </section>
    </>
  )
}

export default FetchUsers
