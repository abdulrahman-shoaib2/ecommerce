import LoginForm from "@/app/(pages)/(auth)/_components/LoginForm";
import { faShieldHalved, faTruck, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Login() {
  return (
    <div className="container py-16 mx-auto px-4" id="login-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <img
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2e5810ff3e-e750761ebcd4ae5907db.png"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faTruck} className="svg-inline--fa fa-truck text-primary-600 mr-2" />
                  Free Delivery
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faShieldHalved} className="svg-inline--fa fa-shield-halved text-primary-600 mr-2" />
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="svg-inline--fa fa-clock text-primary-600 mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
