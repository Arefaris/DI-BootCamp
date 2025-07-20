import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    gender: {
      male: false,
      female: false
    },
    destination: "",
    nutsFree: "No",
    lactoseFree: "No", 
    veganMeal: "No"
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "male" || name === "female") {
      setFormData({
        ...formData,
        gender: {
          ...formData.gender,
          [name]: checked
        }
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked ? "Yes" : "No"
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  }

  return (
    <>
      <form>
        <input onChange={handleChange} type="text" name="name" placeholder="First Name" /> <br/>
        <input onChange={handleChange} type="text" placeholder="Last Name" name="lastName"/> <br/>
        <input onChange={handleChange} type="text" name='age' placeholder="Age" /> <br/>
        <label>Male</label>
        <input
          name="male"
          type="checkbox"
          checked={formData.gender.male}
          onChange={handleChange}
        /> <br/>
        <label>Female</label>
        <input
          name="female"
          type="checkbox"
          checked={formData.gender.female}
          onChange={handleChange}
        /> <br/>
        <select name="destination" onChange={handleChange}>
          <option value="">Please choose</option>
          <option value="paris">paris</option>
          <option value="vietnmae">vietnmae</option>
          <option value="longod">longod</option>
        </select>
        <ul>
          <h3>Dietary restrictions:</h3>
          <li>
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.nutsFree === "Yes"}
              onChange={handleChange}
            />
            <label>Nuts free</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.lactoseFree === "Yes"}
              onChange={handleChange}
            />
            <label>Lactose free</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="veganMeal"
              checked={formData.veganMeal === "Yes"}
              onChange={handleChange}
            />
            <label>Vegan</label>
          </li>
        </ul>
        <button type="submit" >Submit</button>
      </form>
      <h2>Entered information:</h2>
      <p>Your Name: {formData.name} {formData.lastName}</p>
      <p>Your Age: {formData.age}</p>
      <p>Your gender: 
        {formData.gender.male && " Male"}
        {formData.gender.female && " Female"}
        {(!formData.gender.male && !formData.gender.female) && " None"}
      </p>
      <p>Your destination: {formData.destination}</p>
      <p>Your Dietary Restrictions</p>
      <p>Nuts free: {formData.nutsFree}</p>
      <p>Lactose free: {formData.lactoseFree}</p>
      <p>Vegan meal: {formData.veganMeal}</p>
    </>
  )
}

export default App
