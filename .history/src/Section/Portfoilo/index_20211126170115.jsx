import {PrimaryCard} from '../../components/Card'

export default function Portfolio() {
  return (
    <div>
      <PrimaryCard color="white">
        <div className="w-full h-full">
          <img className="rounded-2xl object-fill" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsnU0qrc7XKSXB_otTnrsuuyHW97M1IIQ7w&usqp=CAU" alt=""/>
          <div className="absolute top-0">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />

          </div>
        </div>

      </PrimaryCard>
      
    </div>
  )
}