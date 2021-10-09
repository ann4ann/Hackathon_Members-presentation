import React, { useState } from "react";
import MemberCard from "./memberCard";

const AllMembers = () => {
  const members = [
    {
      id: "1",
      name: "Марк",
      age: 123123,
      about: "JS developer",
      photoUrl: "https://...",
      socialNetworks: {
        telegram: "https://...",
        vk: "https://...",
        inst: "https://..."
      },
      contribution: "develop something",
      isTeamLeader: false,
      skills: {
        html: 25,
        css: 25,
        js: 25,
        react: 25
      }
    },
    {
      id: "2",
      name: "Денис",
      age: 123123,
      about: "JS developer",
      photoUrl: "https://...",
      socialNetworks: {
        telegram: "https://...",
        vk: "https://...",
        inst: "https://..."
      },
      contribution: "develop something",
      isTeamLeader: false,
      skills: {
        html: 25,
        css: 25,
        js: 25,
        react: 25
      }
    },
    {
      id: "3",
      name: "Сергей",
      age: 123123,
      about: "JS developer",
      photoUrl: "https://...",
      socialNetworks: {
        telegram: "https://...",
        vk: "https://...",
        inst: "https://..."
      },
      contribution: "develop something",
      isTeamLeader: false,
      skills: {
        html: 25,
        css: 25,
        js: 25,
        react: 25
      }
    },
    {
      id: "4",
      name: "Владимир",
      age: 123123,
      about: "JS developer",
      photoUrl: "https://...",
      socialNetworks: {
        telegram: "https://...",
        vk: "https://...",
        inst: "https://..."
      },
      contribution: "develop something",
      isTeamLeader: false,
      skills: {
        html: 25,
        css: 25,
        js: 25,
        react: 25
      }
    },
    {
      id: "5",
      name: "Анна Носкова",
      age: 30,
      about:
        "Ставлю своей целью работу и развитие в качестве Frontend-разработчика, в команде, увлеченной своим делом и развитием в нем. \nМои ценности в работе - это структура, порядок, практичность и логика.",
      photoUrl:
        "https://sun9-68.userapi.com/impf/c851224/v851224060/d5197/jcauyJpynkc.jpg?size=720x1080&quality=96&sign=34a232248b64baec6e0139fd32b5cc56&type=album",
      socialNetworks: {
        telegram: "https://t.me/anni_nanni",
        vk: "https://vk.com/anninanni",
        inst: "https://www.instagram.com/annockka/"
      },
      contribution: "Карточка пользователя, Badge, ...",
      isTeamLeader: true,
      skills: {
        html: 100,
        css: 70,
        js: 90,
        react: 65
      }
    }
  ];
  const [allMembers] = useState(members);

  return (
    <div className="d-flex">
      {allMembers.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default AllMembers;
