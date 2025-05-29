import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Ui/Card';
import Sidebar from '../Components/Ui/Sidebar';

const LandingPage = () => {
  const gold = '#FFD700';
  const [isRecording, setIsRecording] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const recognitionRef = useRef(null);
  const [savedDesigns, setSavedDesigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInputValue(transcript);
      };

      recognitionRef.current = recognition;
    } else {
      alert('Speech Recognition not supported in this browser.');
    }
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) return;

    if (!isRecording) {
      recognitionRef.current.start();
      setInputValue('Recording...');
      setIsRecording(true);
    } else {
      recognitionRef.current.stop();
      setIsRecording(false);
      setInputValue((prev) => (prev === 'Recording...' ? '' : prev));
    }
  };

  const handleSend = () => {
    alert(`Sending: ${inputValue}`);
  };

  const handleSaveDesign = (design) => {
    const newDesigns = [...savedDesigns, design];
    setSavedDesigns(newDesigns);
    localStorage.setItem('savedDesigns', JSON.stringify(newDesigns));
  };

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden relative">
      <Sidebar />

      <main className="ml-16 h-full flex flex-col items-center justify-center px-4 py-8 overflow-y-auto">
        {/* Card Display Section */}
        <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              cardData={{
                id: i,
                image: `https://via.placeholder.com/280x220.png?text=Design+${i}`,
                title: `Design ${i}`,
                rating: 4.5
              }}
              handleSave={handleSaveDesign}
              showSave={true}
            />
          ))}
        </div>

        {/* Voice Input Section */}
        <div
          className={`w-full max-w-2xl rounded-xl p-4 bg-black ${
            isRecording ? 'glow-ring animate-pulse' : 'border border-yellow-500'
          }`}
        >
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your jewelry design idea..."
            className="w-full h-24 bg-black text-white placeholder-gray-400 resize-none outline-none rounded-lg p-4 text-lg"
          />

          <div className="flex justify-between mt-3">
            <button
              onClick={toggleRecording}
              className="text-yellow-400 hover:scale-110 transition-transform flex items-center gap-2"
              title="Record"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={gold}
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
              </svg>
              {isRecording ? 'Recording...' : 'Record'}
            </button>

            <button
              onClick={handleSend}
              className="text-yellow-400 text-2xl hover:scale-110 transition-transform"
              title="Send"
            >
              ➤
            </button>
          </div>
        </div>
      </main>

      <style>{`
        .glow-ring {
          box-shadow: 0 0 10px ${gold}, 0 0 20px ${gold};
          border: 2px solid ${gold};
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
