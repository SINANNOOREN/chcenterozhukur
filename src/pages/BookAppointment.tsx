
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, ArrowLeft, Clock, Calendar as CalendarIcon2, User, Phone, Mail, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const departments = [
    "General Medicine",
    "Cardiology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology"
  ];
  
  const doctors = {
    "General Medicine": ["Dr. Sarah Johnson", "Dr. Michael Lee"],
    "Cardiology": ["Dr. James Wilson", "Dr. Emily Chen"],
    "Pediatrics": ["Dr. Robert Brown", "Dr. Jessica Kim"],
    "Orthopedics": ["Dr. David Smith", "Dr. Laura Martinez"],
    "Dermatology": ["Dr. Thomas Davis", "Dr. Sophia Rodriguez"]
  };
  
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !department || !doctor || !formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // In a real application, this would send data to a backend
    console.log({
      appointmentDate: date,
      timeSlot,
      department,
      doctor,
      patientInfo: formData
    });
    
    toast.success("Appointment booked successfully!");
    
    // Reset form after submission
    setDate(undefined);
    setTimeSlot("");
    setDepartment("");
    setDoctor("");
    setFormData({
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container-custom py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <button 
              onClick={() => navigate('/')}
              className="text-clinic-600 hover:text-clinic-700 flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Book an Appointment
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Appointment Details */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <CalendarIcon2 className="text-clinic-600" size={20} />
                  Select Appointment Details
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Department Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
                      <Select 
                        value={department} 
                        onValueChange={setDepartment}
                      >
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Doctor Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="doctor">Doctor <span className="text-red-500">*</span></Label>
                      <Select 
                        value={doctor} 
                        onValueChange={setDoctor}
                        disabled={!department}
                      >
                        <SelectTrigger id="doctor">
                          <SelectValue placeholder="Select Doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {department && doctors[department as keyof typeof doctors]?.map((doc) => (
                            <SelectItem key={doc} value={doc}>
                              {doc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Date Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="date">Date <span className="text-red-500">*</span></Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                            id="date"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable dates in the past and Sundays
                              const day = date.getDay();
                              return date < new Date(new Date().setHours(0, 0, 0, 0)) || day === 0;
                            }}
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {/* Time Slot Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="timeSlot">Time <span className="text-red-500">*</span></Label>
                      <Select 
                        value={timeSlot} 
                        onValueChange={setTimeSlot}
                        disabled={!date}
                      >
                        <SelectTrigger id="timeSlot">
                          <SelectValue placeholder="Select Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                {time}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <User className="text-clinic-600" size={20} />
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    {/* Email Input */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    {/* Notes Input */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <textarea
                        id="notes"
                        name="notes"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-clinic-500 bg-white dark:bg-gray-900"
                        rows={4}
                        placeholder="Please share any specific concerns or information about your appointment"
                        value={formData.notes}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-clinic-600 hover:bg-clinic-700 text-white px-6 py-2"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right Column - Information */}
            <div>
              <div className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-6">Appointment Information</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <Clock className="text-clinic-600" size={16} />
                      Working Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">  Working Hours: Mon-Sat: 7:30 AM - 9:00 PM <br />
                   </p>
                    <p className="text-gray-600 dark:text-gray-300"> Sun: 8:30 AM - 11:30 AM</p>
                 
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <Phone className="text-clinic-600" size={16} />
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300"> Phone: +91 6238573656 <br />
                    +91 9207100102</p>
                    <p className="text-gray-600 dark:text-gray-300">Email: chcozhukur@gmail.com</p>
                  </div>
                  
                  <div className="space-y-2">
                 
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookAppointment;
