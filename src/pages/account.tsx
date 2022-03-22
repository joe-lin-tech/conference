import React, { useState } from "react";
import PageLayout from '../components/page-layout';
import { FaCalendar } from "react-icons/fa";
import { navigate } from "gatsby";
import { auth, firestore } from "../../firebase";
import { useUser, useAuthState } from "../hooks/firebase"
import { signOut } from "firebase/auth"
import { useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore"

const sessions = [
  {
    title: 'Can Cars Gesture? Expressive Autonomous Vehicles',
    speaker: 'Paul Schmitt',
    date: 'April 16 9:00 AM',
    datetime: '2021-04-16',
  },
  {
    title: 'Open World Visual Perception for Autonomous Driving',
    speaker: 'Dr. Shu Kong',
    date: 'April 16 10:00 AM',
    datetime: '2021-04-16',
  },
  {
    title: 'Career Opportunities in the CAV Ecosystem',
    speaker: 'Barrie Kirk',
    date: 'April 16 11:00 AM',
    datetime: '2021-04-16',
  },
  {
    title: 'Metrics and Methods for 3D Detection and Forecasting',
    speaker: 'Dr. Neehar Peri',
    date: 'April 16 11:00 AM',
    datetime: '2021-04-16',
  },
]

const Account = () => {
  const [user, loading, error] = useAuthState()
  const [userData, setUserData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [size, setSize] = useState("Small")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [phone, setPhone] = useState("")
  const [hackathon, setHackathon] = useState(false)

  useEffect(() => {
    if (loading) return;
    if (user) {
      useUser(user.uid).then(doc => {
        setUserData(doc)
      })
    } else {
      navigate('/auth')
    }
  }, [user, loading, showModal])

  useEffect(() => {
    if (loading) return
    if (!userData) return
    setShowModal(userData?.size == null)
  }, [userData, loading])

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/auth")
    }).catch((error) => {
      // An error happened.
      console.log("ERROR: ", error)
    });
  }

  const completeRegistration = async (e) => {
    e.preventDefault()
    await updateDoc(doc(firestore, "users", user.uid), {
      size: size,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone,
      hackathon: hackathon,
    })
    setShowModal(false)
  }

  if (loading) return <div></div>

  return (
    <PageLayout page="Account">
      <section className="px-4 pt-10 pb-10 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-16 w-16 rounded-full"
                  src={userData?.photoURL}
                  alt=""
                />
                <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData?.displayName}</h1>
              <p className="text-sm font-medium text-gray-500">
                Attending the{' '}
                <a href="/" className="text-gray-900">
                  2022 Autonomous Vehicle Expo
                </a>{' '}
                on <time dateTime="2020-08-25">April 16-17, 2022</time>
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <button
              type="button"
              className="px-4 py-2 btn btn-primary text-sm"
              onClick={logOut}
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-5">
          <div className="space-y-6 lg:col-start-1 lg:col-span-3">
            <section>
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Attendee Information
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Profile information and expo details.</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Attendee for</dt>
                      <dd className="mt-1 text-sm text-gray-900">2022 National Autonomous Vehicle Expo</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                      <dd className="mt-1 text-sm text-gray-900">{userData?.email}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">T-shirt Size</dt>
                      <dd className="mt-1 text-sm text-gray-900">{userData?.size}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Expo Reward Points</dt>
                      <dd className="mt-1 text-sm text-gray-900">{userData?.points || "None"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-sm text-gray-900">{userData?.phone || "None"}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">About</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {userData?.about || "None"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <a
                    className="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
                  >
                    Add Profile Information
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section aria-labelledby="timeline-title" className="lg:col-start-4 lg:col-span-2">
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                Timeline
              </h2>

              <div className="mt-6 flow-root">
                <ul role="list" className="-mb-8">
                  {sessions.map((s, i) => (
                    <li key={i}>
                      <div className="relative pb-8">
                        {i !== sessions.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-blue-500">
                              <FaCalendar className="w-4 h-4 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {s.title}{' with '}
                                <a href="#" className="font-medium text-gray-900">
                                  {s.speaker}
                                </a>
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <time dateTime={s.datetime}>{s.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-col justify-stretch">
                <button
                  type="button"
                  className="px-4 py-2 btn btn-primary text-sm"
                >
                  View More
                </button>
              </div>
            </div>
          </section>
        </div>

        {showModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-4xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                  <div className="flex flex-col items-start justify-between p-5 border-b rounded-t">
                    <h1 className="text-xl font-semibold text-gray-900">Completing Registration</h1>
                    <span className="flex items-center">
                      <span className="text-s font-light text-gray-900">Enter your address, shirt size, and hackathon interest to complete your registration.</span>
                    </span>
                  </div>
                  <form className="space-y-4 p-5" onSubmit={(e) => completeRegistration(e)}>
                    <label className="block">
                      <span className="block mb-1 text-xs font-medium text-gray-700">Street Address</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Ex. 123 Main St"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="block mb-1 text-xs font-medium text-gray-700">City</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Ex. San Francisco"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="block mb-1 text-xs font-medium text-gray-700">State</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Ex. CA"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="block mb-1 text-xs font-medium text-gray-700">Zip Code</span>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Ex. 94103"
                        required
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="block mb-1 text-xs font-medium text-gray-700">Phone Number</span>
                      <input
                        className="form-input"
                        type="tel"
                        placeholder="Ex. (123) 456-7890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </label>
                    <div>
                      <label htmlFor="size" className="block mb-1 text-xs font-medium text-gray-700">
                        T-Shirt Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        className="form-select"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <label className="block">
                      <span className="text-xs font-medium text-gray-700">Participating in hackathon?</span>
                      <input
                        className="form-checkbox ml-2"
                        type="checkbox"
                        checked={hackathon}
                        onChange={() => setHackathon(!hackathon)}
                      />
                    </label>
                    <input
                      type="submit"
                      className="w-full btn btn-primary btn-lg"
                      value="Finish Registration"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </section>
    </PageLayout>
  )
}

export default Account;