import React from "react";
import { Brain, Shield, CheckCircle } from "lucide-react";

const aiSectionData = {
  title: "AI Made Simple & Safe for Seniors",
  description:
    "Artificial Intelligence isn't just for young people. We'll show you how AI can help with everyday tasks while keeping your personal information completely secure.",
  safetyTitle: "We Make AI Safe for Seniors",
  safetyDescription:
    "Unlike other tech companies that just show you the buttons to push, we teach you the safety rules first. You'll learn exactly what personal information to keep private, how to spot AI-generated scams, and when to trust AI versus when to ask a human expert.",
};

const aiBenefitsData = [
  {
    title: "Writing Help",
    description:
      "AI can help you write emails to family, thank you notes, or even letters to your doctor - we'll show you exactly how.",
  },
  {
    title: "Trip Planning",
    description:
      "Planning a vacation? AI can help you find the best restaurants, activities, and even create a day-by-day itinerary.",
  },
  {
    title: "Health Questions",
    description:
      "Get quick answers about medications, symptoms, or health topics - but we'll teach you when to see a real doctor instead.",
  },
  {
    title: "Learning New Things",
    description:
      "Want to learn about gardening, cooking, or a hobby? AI can be your personal tutor, explaining things at your own pace.",
  },
  {
    title: "Family Communication",
    description:
      "AI can help you write better texts to grandchildren, create photo captions, or even help with social media posts.",
  },
];

function AIBenefit({ title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
        <CheckCircle className="h-4 w-4 text-blue-600" />
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-1">{title}</h5>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function AISection() {
  const d = aiSectionData;
  return (
    <section id="ai" className="section bg-white/50">
      <div className="inner-section">
        <div className="text-center main-under-text">
          <div className="primary-p-b-gradient p-4 rounded-full w-fit mx-auto mb-6">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h3 className="h3 text-gray-900 mb-4">{d.title}</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {d.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center large-under-text mt-8">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Here's How We Help You With AI:
            </h4>
            <div className="space-y-4">
              {aiBenefitsData.map((b, i) => (
                <AIBenefit key={i} {...b} />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className="w-full h-64"
                title="AI Demo Video"
                allowFullScreen
              />
            </div>
            <h5 className="text-lg font-semibold text-gray-900 mb-3">
              What You'll Learn:
            </h5>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                How to ask AI questions the right way
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                What information to never share with AI
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Practical daily uses that save time
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                How to spot AI scams and fake content
              </li>
            </ul>
          </div>
        </div>

        <div className="secondary-p-b-gradient rounded-2xl p-8 border-l-4 border-purple-400 mt-12">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h4 className="h4 text-purple-800 mb-3">{d.safetyTitle}</h4>
              <p className="text-purple-700 leading-relaxed">
                {d.safetyDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AISection;
