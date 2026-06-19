function Sidebar({ result }) {
  if (
    !result ||
    !result.subTopics ||
    !result.questions ||
    !result.questions.short ||
    !result.questions.long
  )
    return null;

  return (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-6">

  </div>
  )
}

export default Sidebar;
