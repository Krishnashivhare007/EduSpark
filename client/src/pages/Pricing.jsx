import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";

function Pricing() {
  const navigate = useNavigate();
  const [selectedPrice,setSelectedPrice] = useState(null)
  const [paying,setPaying] = useState(false)
  const [payingAmount,setPayingAmount] = useState(null)

  const handlePaying = async (amount) => {
    try {
        setPayingAmount(amount)
        setPaying(true)


    } catch (error) {
        
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 relative">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 to-gray-200 hover:text-black mb-6"
      >
        ⬅️ Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold">Buy Credits</h1>
        <p className="text-gray-600 mt-2">
          Choose a plan that fits your study needs
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard 
        title="Starter"
        price="₹100"
        amount={100}
        credits="100 Credits"
        description="Perfect for quick revision"
        features={[
            "Generate AI notes",
            "Exam-focused answers",
            "Diagram & charts support",
            "Fast generation"
        ]}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onBuy={handlePaying} 
        paying={paying}
        payingAmount={payingAmount}
        />

        <PricingCard 
        title="Popular"
        popular={true}
        price="₹200"
        amount={200}
        credits="300 Credits"
        description="Best value for students"
        features={[
            "All Starter Features",
            "More Credits per ₹",
            "Revision Mode access",
            "Priority AI response"
        ]}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onBuy={handlePaying} 
        paying={paying}
        payingAmount={payingAmount}
        />

        <PricingCard 
        title="Pro Learner"
        price="₹500"
        amount={500}
        credits="1000 Credits"
        description="For serious exam preparation"
        features={[
            "Maximum Credit Value",
            "Unlimited Revision",
            "Charts and Diagrams",
            "Ideal for full syllabus"
        ]}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onBuy={handlePaying} 
        paying={paying}
        payingAmount={payingAmount}
        />
    </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  amount,
  credits,
  description,
  features,
  popular,
  selectedPrice,
  setSelectedPrice,
  onBuy,
  paying,
  payingAmount,
}) {

    const isSelected = selectedPrice === amount;
    const isPayingThisCard = paying && payingAmount === amount;
  return( 

  <motion.div
  onClick={()=>setSelectedPrice(amount)}
  whileHover={{y:-4}}
  className={`relative cursor-pointer rounded-xl p-6 bg-white border transition ${isSelected ? "border-black"
    : popular
    ? "border-indigo-500"
    : "border-gray-200"
  }`}>
    {popular && !isSelected && <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-xl bg-indigo-600 text-white">Popular</span>}

    {isSelected && <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-xl bg-black text-white">Selected</span>}

    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-sm text-gray-500 mt-1">{description}</p>

    <div className="mt-4">
        <p className="text-3xl font-bold">{price}</p>
        <p className="text-sm text-indigo-600">{credits}</p>
    </div>

    <button 
    disabled={isPayingThisCard}
    onClick={(e)=>{e.stopPropagation(); onBuy(amount)}}
    className={`
        w-full mt-5 py-2 rounded-lg font-medium transition ${isPayingThisCard
            ? "bg-gray-300 cursor-not-allowed"
            : isSelected
            ? "bg-black text-white"
            : " bg-indigo-600 text-white hover:bg-indigo-700"
        }`}>
            {isPayingThisCard? "Redirecting...":"Buy Now"}
    </button>

    <ul className="mt-5 space-y-2 text-sm to-gray-600">
        {features.map((f,i)=>(
            <li key={i} className="flex gap-2">
                <span className="text-green-600 mt-0.5"><IoIosCheckmarkCircle size={16}/></span>
                {f}
            </li>
        ))}
    </ul>

  </motion.div>
  
)}

export default Pricing;
