import { LuTriangleAlert,LuSquareActivity,LuWifi  } from "react-icons/lu";

export default function Panel(){
    const grid = [
        {
            h1: "Sensores Totales",
            number: 1,
            icon:<LuSquareActivity />,
            span: "Sensores registrados",
        },
        {
            h1: "Sensores Activos",
            number: 1,
            icon: <LuWifi />,
            span: "Sensores registrados",
        },
        {
            h1: "Advertencias",
            number: 1,
            icon: <LuTriangleAlert />,
            span: "Sensores registrados",
        },
        {
            h1: "Alarmas",
            number: 1,
            icon:<LuTriangleAlert />,
            span: "Sensores registrados",
        }
    ]

    const sensors =[
        {
            WorkPlace: "Area A",
            Overall: "2 mm/s"
        },
        {
            WorkPlace: "Area A",
            Overall: "2 mm/s"
        }
    ]

    return(
        <main className="flex flex-col w-full bg-[#f4f4f4] p-4"> 
            <section className="w-full flex flex-wrap gap-4 justify-center">
            {grid.map((text, id)=>(
                <article key={id} className="min-w-70 bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between">
                        <h1>{text.h1}</h1>
                        {text.icon}
                    </div>
                    <span>{text.number}  </span>
                </article>
            ))}
            </section>
            <section className="w-full flex flex-wrap p-4 gap-4 justify-center">
                <div className=" flex flex-wrap gap-4 justify-center bg-white rounded-lg shadow-md p-4">
                    <div>
                        <h1>Estado de Sensores</h1>
                        {sensors.map((text, id)=>(
                            <article key={id} className="min-w-70 rounded-lg shadow-md p-4">
                                <div className="flex justify-between">
                                    <h1>{text.WorkPlace}</h1>
                                </div>
                                <span>{text.Overall}  </span>
                            </article>
                        ))}
                    </div>
                </div>
                <div className=" flex flex-wrap gap-4 justify-center bg-white rounded-lg shadow-md p-4">
                    <h1>Alertas recientes</h1>
                </div>
                <div className=" flex flex-wrap gap-4 justify-center bg-white rounded-lg shadow-md p-4">
                    <h1>Estado del sistema</h1>
                </div>
                
            </section>
        </main>
    )
}