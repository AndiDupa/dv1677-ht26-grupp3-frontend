import { useState } from "react";
import FormPostMaas from "./fetcher-maas.jsx";
import FormPostOpenstack from "./fetcher-openstack.jsx";
import FormPostProxmox from "./fetcher-proxmox.jsx";
import FormPostCancel from "./fetcher-cancel.jsx";

const componentList = {
  maas: FormPostMaas,
  openstack: FormPostOpenstack,
  proxmox: FormPostProxmox,
  cancel: FormPostCancel
}

function FormHandler() {
  const [resource, setResource] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (rType) => {
    setResource(rType);
  }

  const Selected = componentList[resource]

  return (
    <>     
      <h1 className="center margin-bottom">Välj en typ av resurs att boka</h1>
      <div>
        <div className="margin-bottom">
          <button className="link" onClick={() => handleChange("maas")}>MAAS</button>
          <button className="link" onClick={() => handleChange("proxmox")}>Proxmox</button>
          <button className="link" onClick={() => handleChange("openstack")}>Openstack</button>
          <button className="link" onClick={() => handleChange("cancel")}>Cancel</button>
        </div>

        <div>
          {Selected ? (
            <Selected />
          ) : (
            <p>Välj en resurs ovan.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default FormHandler;