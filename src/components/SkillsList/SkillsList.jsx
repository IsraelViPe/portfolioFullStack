import './SkillsList.scss'

import { TfiHtml5 } from 'react-icons/tfi'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiMysql,
  SiPython,
  SiSequelize,
  SiJest
} from 'react-icons/si'
import { FaCss3Alt, FaSass, FaReact, FaGitAlt, FaNode } from 'react-icons/fa'

const icons = [
  { component: TfiHtml5, name: 'html' },
  { component: SiJavascript, name: 'javaScript' },
  { component: SiTypescript, name: 'typeScript' },
  { component: FaCss3Alt, name: 'css' },
  { component: FaSass, name: 'sass' },
  { component: FaReact, name: 'react' },
  { component: FaGitAlt, name: 'git' },
  { component: SiJest, name: 'jest' },
  { component: FaNode, name: 'nodeJS' },
  { component: SiMongodb, name: 'mongoDB' },
  { component: SiDocker, name: 'docker' },
  { component: SiExpress, name: 'express' },
  { component: SiMysql, name: 'mySQL' },
  { component: SiPython, name: 'python' },
  { component: SiSequelize, name: 'sequelize' }
]

export default function SkillsList() {
  return (
    <div className="skill__list">
      {icons.map((icon, index) => (
        <div className="skill__list-card" key={index}>
          <div>{icon.component && <icon.component />}</div>
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  )
}
