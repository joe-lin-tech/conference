import React from "react";
import PageLayout from '../components/page-layout';
import ProfileCard from "../components/profile-card";

const About = () => {
  return (
    <PageLayout page="About">
      <section className="px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">About the Team</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-6 text-lg text-center text-gray-600 md:text-xl lg:px-24">
            The autonomous vehicle expo team primarily consists of representatives from BSA Troop 452. The team is also composed of various high school and college volunteers.
          </p>
        </div>
        <div className="md:grid md:gap-2 md:grid-cols-9">
          <div className="col-start-4 col-end-7">
            <ProfileCard
              name="Joe Lin"
              position="Autonomous Vehicle Expo Lead"
              url="/profiles/joe-lin.jpeg"
              links={[
                {
                  name: "github",
                  url: "https://github.com/joe-lin-tech",
                },
                {
                  name: "linkedin",
                  url: "https://www.linkedin.com/in/joe-lin-44956b19a/",
                },
                {
                  name: "facebook",
                  url: "https://www.facebook.com/joe.lin.2004",
                }
              ]}
            />
          </div>
        </div>
        <div className="md:grid md:gap-1 md:grid-cols-4">
          <div className="col-start-1">
            <ProfileCard
              name="Ivan Lin"
              position="Director of Logistics"
              url="/profiles/ivan-lin.jpg"
              links={[
                {
                  name: "github",
                  url: "https://github.com",
                },
              ]}
            />
          </div>
          <ProfileCard
            name="Oliver Ni"
            position="Partner Rep & Team Member"
            url="/profiles/oliver-ni.jpg"
            links={[
              {
                name: "github",
                url: "https://github.com/oliver-ni",
              },
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/oliverni/",
              },
              {
                name: "facebook",
                url: "https://www.facebook.com",
              }
            ]}
          />
          <ProfileCard
            name="Kento Nishi"
            position="Partner Representative"
            url="https://anish-lakkapragada.github.io/SLI/images/kento.png"
            links={[
              {
                name: "github",
                url: "https://github.com/KentoNishi",
              },
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/kento-nishi-5696ab185/",
              }
            ]}
          />
          <ProfileCard
            name="William Huang"
            position="Partner Representative"
            url="/profiles/william-huang.jpg"
            links={[
              {
                name: "facebook",
                url: "https://www.facebook.com/",
              }
            ]}
          />
          <ProfileCard
            name="Michael Lutz"
            position="Partner Representative"
            url="/profiles/michael-lutz.jpeg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/michael-lutz-8b3a5817b/",
              },
            ]}
          />
          <ProfileCard
            name="Sophia Khubchandani"
            position="Team Member"
            url="/profiles/sophia-khubchandani.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/sophia-khubchandani-407b29221/",
              },
              {
                name: "facebook",
                url: "https://www.facebook.com",
              }
            ]}
          />
          <ProfileCard
            name="Raymond Shao"
            position="Team Member"
            url="/profiles/raymond-shao.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com",
              },
              {
                name: "facebook",
                url: "https://www.facebook.com",
              }
            ]}
          />
          <ProfileCard
            name="Daniel Yang"
            position="Team Member"
            url="/profiles/daniel-yang.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com",
              },
              {
                name: "facebook",
                url: "https://www.facebook.com",
              }
            ]}
          />
          <ProfileCard
            name="Ian Chen"
            position="Team Member"
            url="/profiles/ian-chen.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/iandchen/",
              },
            ]}
          />
          <ProfileCard
            name="Alexander Zhang"
            position="Team Member"
            url="/profiles/alexander-zhang.jpeg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/alexander-zhang-71303b203/",
              },
            ]}
          />
          <ProfileCard
            name="Erin Hsu"
            position="Team Member"
            url="/profiles/erin-hsu.jpg"
            links={[
              {
                name: "linkedin",
                url: "",
              },
            ]}
          />
          <ProfileCard
            name="Shailesh Senthilkumar"
            position="Team Member"
            url="/profiles/shailesh-senthilkumar.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/shailesh-senthil/",
              },
            ]}
          />
          <ProfileCard
            name="Anton Ouyang"
            position="Team Member"
            url="/profiles/anton-ouyang.jpg"
            links={[
              {
                name: "linkedin",
                url: "",
              },
            ]}
          />
          <ProfileCard
            name="Kyle He"
            position="Team Member"
            url="/profiles/kyle-he.jpg"
            links={[
              {
                name: "linkedin",
                url: "",
              },
            ]}
          />
          <ProfileCard
            name="Andrew Yuan"
            position="Team Member"
            url="/profiles/andrew-yuan.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com",
              },
            ]}
          />
          <ProfileCard
            name="Kenneth Kang"
            position="Team Member"
            url="/profiles/kenneth-kang.jpeg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/kennykennethkkang",
              },
            ]}
          />
          <ProfileCard
            name="Steve Yang"
            position="Team Member"
            url="/profiles/steve-yang.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com",
              },
            ]}
          />
          <ProfileCard
            name="Bennie Chang"
            position="Team Member"
            url="/profiles/bennie-chang.jpg"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com/in/bennie-chang/",
              },
            ]}
          />
          <ProfileCard
            name="Robert Ji"
            position="Team Member"
            url="/profiles/placeholder.png"
            links={[
              {
                name: "linkedin",
                url: "https://www.linkedin.com",
              },
            ]}
          />
          <ProfileCard
            name="Rohil Shah"
            position="Team Member"
            url="/profiles/placeholder.png"
            links={[
              {
                name: "github",
                url: "https://github.com/rohildshah",
              },
            ]}
          />
        </div>
      </section>
    </PageLayout>
  )
}

export default About;