import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Video, Loader2, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GHLCalendarEmbedProps {
  calendarId?: string;
  title?: string;
  description?: string;
  height?: number;
  showTitle?: boolean;
  containerClass?: string;
  appointmentType?: "consultation" | "strategy" | "discovery" | "custom";
  duration?: number;
  timezone?: string;
  onAppointmentBooked?: (data: any) => void;
  fallbackOptions?: boolean;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  date: string;
}

const appointmentTypes = {
  consultation: {
    title: "Free Business Consultation",
    duration: 30,
    description: "Discuss your business goals and discover how we can help you achieve them.",
    icon: User
  },
  strategy: {
    title: "Strategy Planning Session",
    duration: 60,
    description: "Deep dive into your business strategy and create an actionable roadmap.",
    icon: Calendar
  },
  discovery: {
    title: "Discovery Call",
    duration: 15,
    description: "Quick chat to understand your needs and see if we're a good fit.",
    icon: Phone
  },
  custom: {
    title: "Custom Consultation",
    duration: 45,
    description: "Tailored consultation based on your specific business needs.",
    icon: Video
  }
};

export default function GHLCalendarEmbed({
  calendarId = "your-ghl-calendar-id",
  title,
  description,
  height = 700,
  showTitle = true,
  containerClass = "",
  appointmentType = "consultation",
  duration,
  timezone = "America/New_York",
  onAppointmentBooked,
  fallbackOptions = true
}: GHLCalendarEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const appointmentConfig = appointmentTypes[appointmentType];
  const finalTitle = title || appointmentConfig.title;
  const finalDescription = description || appointmentConfig.description;
  const finalDuration = duration || appointmentConfig.duration;

  // Mock available time slots - in real implementation, these would come from GHL API
  const availableSlots: TimeSlot[] = [
    { id: "1", time: "9:00 AM", available: true, date: "2024-01-15" },
    { id: "2", time: "10:30 AM", available: true, date: "2024-01-15" },
    { id: "3", time: "2:00 PM", available: false, date: "2024-01-15" },
    { id: "4", time: "3:30 PM", available: true, date: "2024-01-15" },
    { id: "5", time: "9:00 AM", available: true, date: "2024-01-16" },
    { id: "6", time: "11:00 AM", available: true, date: "2024-01-16" },
    { id: "7", time: "1:00 PM", available: true, date: "2024-01-16" },
    { id: "8", time: "4:00 PM", available: false, date: "2024-01-16" }
  ];

  useEffect(() => {
    // Simulate loading time and check if GHL calendar is available
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real implementation, you would check if the GHL script loaded successfully
      // For now, we'll show the fallback calendar as a demonstration
      if (fallbackOptions) {
        setShowFallback(true);
      } else {
        setHasError(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [fallbackOptions]);

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsBooking(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const appointmentData = {
        date: selectedDate,
        time: selectedTime,
        duration: finalDuration,
        type: appointmentType,
        timezone
      };
      
      console.log("Appointment booked:", appointmentData);
      onAppointmentBooked?.(appointmentData);
      setIsBooked(true);
    } catch (error) {
      console.error("Booking error:", error);
      setHasError(true);
    } finally {
      setIsBooking(false);
    }
  };

  if (isBooked) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center ${containerClass}`}
        data-testid="ghl-calendar-success"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-vestra-navy mb-4">
          Appointment Confirmed!
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your {finalTitle.toLowerCase()} has been scheduled. You'll receive a confirmation 
          email with meeting details and a calendar invite.
        </p>
        
        <div className="bg-vestra-orange/10 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-vestra-orange mr-2" />
              <span>{selectedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-vestra-orange mr-2" />
              <span>{selectedTime} ({finalDuration} min)</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <p>📧 Confirmation email sent</p>
          <p>📅 Calendar invite included</p>
          <p>🔔 Reminder set for 15 minutes before</p>
        </div>

        <Button
          className="bg-vestra-orange hover:bg-vestra-orange/90 text-white"
          onClick={() => {
            setIsBooked(false);
            setSelectedDate("");
            setSelectedTime("");
          }}
          data-testid="button-book-another"
        >
          Book Another Appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <div className={`${containerClass}`} data-testid="ghl-calendar-container">
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-vestra-navy mb-4" data-testid="ghl-calendar-title">
            {finalTitle}
          </h2>
          <p className="text-lg text-vestra-slate max-w-2xl mx-auto mb-6" data-testid="ghl-calendar-description">
            {finalDescription}
          </p>
          
          {/* Appointment Info */}
          <div className="inline-flex items-center space-x-6 bg-vestra-orange/10 rounded-lg px-6 py-3">
            <div className="flex items-center text-sm text-vestra-navy">
              <Clock className="w-4 h-4 mr-2" />
              <span>{finalDuration} minutes</span>
            </div>
            <div className="flex items-center text-sm text-vestra-navy">
              <appointmentConfig.icon className="w-4 h-4 mr-2" />
              <span>Video Call</span>
            </div>
          </div>
        </motion.div>
      )}

      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center"
          style={{ height: height }}
          data-testid="ghl-calendar-loading"
        >
          <Loader2 className="w-8 h-8 animate-spin text-vestra-orange mx-auto mb-4" />
          <p className="text-gray-600">Loading calendar...</p>
        </motion.div>
      ) : hasError && !showFallback ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg border border-red-200 p-12 text-center"
          data-testid="ghl-calendar-error"
        >
          <Calendar className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Calendar Temporarily Unavailable
          </h3>
          <p className="text-gray-600 mb-6">
            We're experiencing technical difficulties. Please contact us directly to schedule.
          </p>
          <Button
            className="bg-vestra-orange hover:bg-vestra-orange/90 text-white"
            data-testid="button-contact-direct"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Contact Us Directly
          </Button>
        </motion.div>
      ) : showFallback ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          data-testid="ghl-calendar-fallback"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Date Selection */}
            <div>
              <h3 className="text-lg font-semibold text-vestra-navy mb-4">
                Select a Date
              </h3>
              <div className="space-y-2">
                {["2024-01-15", "2024-01-16", "2024-01-17"].map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`w-full p-3 text-left rounded-lg border transition-all duration-300 ${
                      selectedDate === date
                        ? "border-vestra-orange bg-vestra-orange/10 text-vestra-navy"
                        : "border-gray-200 hover:border-vestra-orange/50 text-gray-700"
                    }`}
                    data-testid={`button-date-${date}`}
                  >
                    <div className="font-medium">
                      {new Date(date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-sm text-gray-500">
                      {availableSlots.filter(slot => slot.date === date && slot.available).length} slots available
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h3 className="text-lg font-semibold text-vestra-navy mb-4">
                Available Times
              </h3>
              {selectedDate ? (
                <div className="grid grid-cols-2 gap-3">
                  {availableSlots
                    .filter(slot => slot.date === selectedDate)
                    .map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedTime === slot.time
                            ? "bg-vestra-orange text-white"
                            : slot.available
                            ? "border border-gray-200 hover:border-vestra-orange text-gray-700 hover:bg-vestra-orange/10"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                        data-testid={`button-time-${slot.id}`}
                      >
                        {slot.time}
                      </button>
                    ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Please select a date to view available times</p>
                </div>
              )}
            </div>
          </div>

          {/* Booking Section */}
          {selectedDate && selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-vestra-navy mb-3">Appointment Summary</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{selectedTime} ({timezone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{finalDuration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-medium">{finalTitle}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleBookAppointment}
                disabled={isBooking}
                className="w-full bg-vestra-orange hover:bg-vestra-orange/90 text-white py-4 text-lg font-semibold transition-all duration-300"
                data-testid="button-book-appointment"
              >
                {isBooking ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Booking Appointment...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </>
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By booking this appointment, you'll receive a confirmation email with meeting details.
              </p>
            </motion.div>
          )}
        </motion.div>
      ) : (
        // Actual GHL Calendar Embed (placeholder for real implementation)
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          data-testid="ghl-calendar-embed"
        >
          <iframe
            src={`https://your-ghl-domain.com/widget/booking/${calendarId}`}
            width="100%"
            height={height}
            frameBorder="0"
            title="Go High Level Calendar Booking"
            className="w-full"
          />
        </motion.div>
      )}
    </div>
  );
}