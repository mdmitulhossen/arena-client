import { useState } from "react";
import tcBg from '../../assets/design/color/0.jpg'
import tc1 from '../../assets/design/color/1.jpg'
import tc2 from '../../assets/design/color/2.jpg'
import tc3 from '../../assets/design/color/3.jpg'
import tc4 from '../../assets/design/color/4.jpg'
import tc5 from '../../assets/design/color/5.jpg'
import tc6 from '../../assets/design/color/6.jpg'
import tc7 from '../../assets/design/color/7.jpg'
import tc8 from '../../assets/design/color/8.jpg'

// tShirt design
import tcd1 from '../../assets/design/1.png'
import tcd2 from '../../assets/design/2.png'
import tcd3 from '../../assets/design/3.png'
import tcd4 from '../../assets/design/4.png'
import CreateDesignForm from "../../components/form/CreateDesignForm";

const tShirtColorData = [
    {
        id: 1,
        color: tc1,
    },
    {
        id: 2,
        color: tc2,
    },
    {
        id: 3,
        color: tc3,
    },
    {
        id: 4,
        color: tc4,
    },
    {
        id: 5,
        color: tc5,
    },
    {
        id: 6,
        color: tc6,
    },
    {
        id: 7,
        color: tc7,
    },
    {
        id: 8,
        color: tc8,
    }
]

const tShirtDesignData = [
    {
        id: 1,
        design: tcd1,
    },
    {
        id: 2,
        design: tcd2,
    },
    {
        id: 3,
        design: tcd3,
    },
    {
        id: 4,
        design: tcd4,
    }
]

const CreateDesignPage = () => {
    const [tShirtColor, setTShirtColor] = useState(tShirtColorData[0])
    const [tShirtDesign, setTShirtDesign] = useState(tShirtDesignData[0])
    return (
        <div>
            <div className="grid grid-cols-2 gap-16 pt-10">
                <div className="">
                    <div className="flex gap-2">
                        <div className="w-full relative">
                            <img src={tShirtColor?.color} alt="" className="w-full h-full object-cover" />
                            <img src={tShirtDesign?.design} alt="" className="max-w-[300px] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="">
                            {
                                tShirtDesignData?.map((item, index) => (
                                    <img onClick={() => setTShirtDesign(item)} key={index} src={item.design} alt="" className="max-w-[100px] border-b-2 border-dashed cursor-pointer" />
                                ))
                            }
                        </div>
                    </div>

                    {/* color */}
                    <div className="flex gap-3 pt-4">
                        {
                            tShirtColorData?.map((item, index) => (
                                <img onClick={() => setTShirtColor(item)} key={index} src={item.color} alt="" className="max-w-[50px] border-b-2 border-dashed cursor-pointer" />
                            ))
                        }
                    </div>
                </div>
                {/* right Side */}
                <div className="">
                    <CreateDesignForm />
                </div>
            </div>
        </div>
    );
};

export default CreateDesignPage;