import React, { useState } from "react";
import PageLayout from '../components/page-layout';
import { FaCalendar, FaEdit, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { navigate } from "gatsby";
import { auth, firestore } from "../../firebase";
import { useUser, useAuthState } from "../hooks/firebase"
import { signOut } from "firebase/auth"
import { useEffect } from "react";
import { deleteField, doc, updateDoc } from "firebase/firestore"

const sessions = [
  {
    title: "Can Cars Gesture? Expressive Autonomous Vehicles",
    speaker: "Paul Schmitt - Motion Planning System Architect & Expressive Robotics Manager at Motional",
    time: "April 16th, 2022 at 9:00 AM PST",
  },
  {
    title: "Autonomous Vehicles Program Overview - California DMV",
    speaker: "Miguel D. Acosta - California Department of Motor Vehicles (Autonomous Vehicles Branch)",
    time: "April 16th, 2022 at 10:00 AM PST",
  },
  {
    title: "A Gentle Introduction to Artificial Intelligence",
    speaker: "Emmy Li - Instructional Design Engineer at Inspirit AI (Stanford University Alumni)",
    time: "April 16th, 2022 at 11:00 AM PST",
  },
  {
    title: "Metrics and Methods for 3D Detection and Forecasting",
    speaker: "Dr. Neehar Peri - PhD Student at CMU’s Argo AI Center for Autonomous Vehicle Research",
    time: "April 16th, 2022 at 1:00 PM PST",
  },
  {
    title: "NVIDIA’s AI Infrastructure for Self-Driving Cars",
    speaker: "Yifang Xu - Engineering Manager (Perception for Autonomous Driving) at NVIDIA",
    time: "April 16th, 2022 at 2:00 PM PST",
  },
  {
    title: "Open World Visual Perception for Autonomous Driving",
    speaker: "Dr. Shu Kong - Postdoctoral Researcher at CMU’s Argo AI Center for Autonomous Vehicle Research",
    time: "April 17th, 2022 at 9:00 AM PST",
  },
  {
    title: "Career Opportunities in the CAV Ecosystem",
    speaker: "Barrie Kirk - Co-Founder and Executive Director of CAVCOE (Canadian Automated Vehicles Center of Excellence)",
    time: "April 17th, 2022 at 10:00 AM PST",
  },
  {
    title: "The Path to Autonomy",
    speaker: "Katie Clothier - Autonomous Vehicle Product Developer at Stantec GenerationAV at Stantec GenerationAV",
    time: "April 17th, 2022 at 11:00 AM PST",
  },
  {
    title: "Waymo 101: The Potential of Autonomous Driving Technology",
    speaker: "Amanda Ventura Zink - Public Affairs Manager at Waymo",
    time: "April 17th, 2022 at 1:00 PM PST",
  }
]

const Account = () => {
  const [user, loading, error] = useAuthState()
  const [userData, setUserData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showOptOut, setShowOptOut] = useState(false)
  const [size, setSize] = useState("Small")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [phone, setPhone] = useState("")
  const [about, setAbout] = useState("")
  const [timelineLength, setTimelineLength] = useState(3)
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
  }, [user, loading, showModal, showOptOut])
  
  useEffect(() => {
    if (loading) return
    if (!userData) return
    setAbout(userData?.about || "None")
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

  const optIn = async (e) => {
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

  const optOut = async () => {
    await updateDoc(doc(firestore, "users", user.uid), {
      size: deleteField(),
      address: deleteField(),
      city: deleteField(),
      state: deleteField(),
      zipcode: deleteField(),
      phone: deleteField(),
      hackathon: deleteField(),
    })
    setShowOptOut(false)
  }

  const updateProfile = async () => {
    if (userData?.size == null) {
      await updateDoc(doc(firestore, "users", user.uid), {
        about: about
      })
    } else {
      await updateDoc(doc(firestore, "users", user.uid), {
        size: size,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        phone: phone,
        hackathon: hackathon,
      })
    }
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
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      Attendee Information
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Profile information and expo details.</p>
                  </div>
                  <button type="button" className="btn btn-primary self-center" onClick={userData?.size == null ? () => setShowModal(true) : () => setShowOptOut(true)}>
                    {userData?.size == null ? "Opt-In for Rewards/Merch" : "Opt-Out of Rewards/Merch"}
                  </button>
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
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Expo Reward Points</dt>
                      <dd className="mt-1 text-sm text-gray-900">{userData?.points || "None"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Street Address</dt>
                      <dd className={`mt-1 text-sm ${userData?.address ? "text-gray-900" : "text-red-500"}`}>{userData?.address || "N/A: Opted Out of Rewards/Merch"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">City</dt>
                      <dd className={`mt-1 text-sm ${userData?.city ? "text-gray-900" : "text-red-500"}`}>{userData?.city || "N/A: Opted Out of Rewards/Merch"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">State</dt>
                      <dd className={`mt-1 text-sm ${userData?.state ? "text-gray-900" : "text-red-500"}`}>{userData?.state || "N/A: Opted Out of Rewards/Merch"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Zip Code</dt>
                      <dd className={`mt-1 text-sm ${userData?.zipcode ? "text-gray-900" : "text-red-500"}`}>{userData?.zipcode || "N/A: Opted Out of Rewards/Merch"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                      <dd className={`mt-1 text-sm ${userData?.size ? "text-gray-900" : "text-red-500"}`}>{userData?.phone || "N/A: Opted Out of Rewards/Merch"}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">T-Shirt Size</dt>
                      <dd className={`mt-1 text-sm ${userData?.size ? "text-gray-900" : "text-red-500"}`}>{userData?.size || "N/A: Opted Out of Rewards/Merch"}</dd>
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
                  <button
                    type="button"
                    className="bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg flex items-center justify-center w-full"
                    onClick={() => {}}
                  >
                    <FaEdit className="mr-2" />
                    Edit Profile Information (Feature Coming Soon...)
                  </button>
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
                  {sessions.slice(0, timelineLength).map((s, i) => (
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
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 grid grid-cols-5">
                            <div className="col-start-1 col-end-4">
                              <p className="text-sm text-gray-500">
                                {s.title}{' with '}
                                <a href="#" className="font-medium text-gray-900">
                                  {s.speaker}
                                </a>
                              </p>
                            </div>
                            <div className="text-right text-sm text-gray-500 col-span-2">
                              <p>{s.time}</p>
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
                  onClick={timelineLength != sessions.length ? () => setTimelineLength(sessions.length) : () => setTimelineLength(3)}
                >
                  {timelineLength != sessions.length ? "View More" : "View Less"}
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
                    <h1 className="text-xl font-semibold text-gray-900">Opting In for Rewards/Merch</h1>
                    <span className="flex items-center">
                      <span className="text-s font-light text-gray-900">Enter your address and shirt size, so we know where to ship your rewards/merch.</span>
                    </span>
                  </div>
                  <form className="space-y-4 p-5" onSubmit={(e) => optIn(e)}>
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
                    <div className="flex">
                      <input
                        type="submit"
                        className="w-full btn btn-primary btn-lg mr-1"
                        value="Opt In for Rewards/Merch"
                      />
                      <button
                        type="button"
                        className="w-full btn bg-gray-200 btn-lg ml-1 hover:bg-gray-300"
                        onClick={() => setShowModal(false)}
                      >
                        Don't Opt In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
        {showOptOut && <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Opting Out of Rewards/Merch!</p>
                    <p className="mt-1 text-sm text-gray-500">If you opt out, this means we will not be able to send you any rewards or merch from the event.</p>
                    <div className="mt-3 flex space-x-7">
                      <button
                        type="button"
                        onClick={optOut}
                        className="bg-white rounded-md text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShowOptOut(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FaTimes className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </section>
    </PageLayout>
  )
}

export default Account;