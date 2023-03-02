import { PageLinks } from "components/PageLinks"
import { useRouter } from "next/router"
import { NavBar } from "components/NavBar"
import { useAuth } from "components/AuthProvider"
import { useEffect, useRef, useState } from "react"
import { getProjectById } from "services/project.service"
import { assignProjectToMember } from "services/permission.service"

export default function Project() {
  const { user } = useAuth()
  const formRef = useRef(null);
  
  const [project, setProject] = useState('')
  
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    fetchProjectDetail()
  }, [id])
  
  const fetchProjectDetail = async () => {
    const response = await  getProjectById(id, user.email)
    setProject(response);
  }

  const assignProject = async() => {
    event.preventDefault();
    const res = await assignProjectToMember(formRef.current.value, id, user.email);
    alert(res);
  }
 
  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex">
        <div className="col-2">
          <PageLinks />
        </div>
         <div className="col-5">
            <div>
              <h1>Project: {id}</h1>
              <h6>Organization ADMINS and Project ADMINS have access</h6>
              <div className="">
                <h6 className={project.includes('not') ? "text-danger" : "text-success"}>
                  <b>{project}</b>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-5">
          <form>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Project</label>
              <div className="col-sm-10">
                <input type="text" readOnly={true} className="form-control-plaintext" id="staticEmail" value={id}></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label">Member</label>
              <div className="col-sm-10">
                <select ref={formRef} className="form-control" id="exampleFormControlSelect1">
                  <option>m1</option>
                  <option>m2</option>
                  <option>m3</option>
                  <option>m4</option>
                  <option>m5</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-2 mt-3 mx-auto" onClick={assignProject}>Assign Project</button>
          </form>
          </div>
      </div>
    </div>
  )
}

Project.requireAuth = true
