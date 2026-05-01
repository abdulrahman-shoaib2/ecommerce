'use client'
import { Button } from '@/components/ui/button'
import { contactSchema } from '@/validation/contactSchema'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'


export default function ContactForm() {
  const { register, formState: { errors }, reset, handleSubmit } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })
  function submitForm() {
      reset()
  }
  return (

    <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            {...register("name")}
            required
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500  ${errors.name ? 'border-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100' : 'border-gray-200  focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100'}`}
            type="text"
          />
          {errors.name && <span className='text-red-600'>{errors.name.message}</span>}

        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            {...register('email')}
            id="email"
            required
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500  ${errors.email ? 'border-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100' : 'border-gray-200  focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100'}`}
            type="email"
          />
          {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Subject
        </label>
        <select
          {...register('subject')}
          id="subject"
          name="subject"
          required
          className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500  ${errors.subject ? 'border-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100' : 'border-gray-200  focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100'}`}
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="order">Order Support</option>
          <option value="shipping">Shipping Question</option>
          <option value="returns">Returns &amp; Refunds</option>
          <option value="product">Product Information</option>
          <option value="feedback">Feedback &amp; Suggestions</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <span className='text-red-600'>{errors.subject.message}</span>}

      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          required
          rows={5}
          placeholder="How can we help you?"
          className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500  ${errors.message ? 'border-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100' : 'border-gray-200  focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100'}`}
          defaultValue={""}
        />
        {errors.message && <span className='text-red-600'>{errors.message.message}</span>}

      </div>
      <Button
        type="submit"
        className="w-full! md:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-primary-600/20"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="svg-inline--fa fa-paper-plane" />
        Send Message
      </Button>
    </form>

  )
}
