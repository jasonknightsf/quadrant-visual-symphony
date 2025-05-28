
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RevenueChart from "@/components/charts/RevenueChart";
import UserAnalyticsChart from "@/components/charts/UserAnalyticsChart";
import TrafficSourcesChart from "@/components/charts/TrafficSourcesChart";
import PerformanceChart from "@/components/charts/PerformanceChart";
import { LayoutDashboard, TrendingUp, Users, Globe, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Material Design AppBar */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900">Analytics Dashboard</h1>
              <p className="text-sm text-gray-600">Monitor your business performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Material Design Cards for Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Revenue</p>
                  <p className="text-3xl font-normal text-gray-900 mt-2">$847,291</p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Active Users</p>
                  <p className="text-3xl font-normal text-gray-900 mt-2">23,847</p>
                  <p className="text-sm text-blue-600 flex items-center gap-1 mt-2">
                    <Users className="w-4 h-4" />
                    +8.2% from last week
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Page Views</p>
                  <p className="text-3xl font-normal text-gray-900 mt-2">1.2M</p>
                  <p className="text-sm text-purple-600 flex items-center gap-1 mt-2">
                    <Globe className="w-4 h-4" />
                    +15.3% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Conversion Rate</p>
                  <p className="text-3xl font-normal text-gray-900 mt-2">3.47%</p>
                  <p className="text-sm text-orange-600 flex items-center gap-1 mt-2">
                    <Zap className="w-4 h-4" />
                    +2.1% from last week
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Material Design Chart Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-medium text-gray-900">Revenue Trends</CardTitle>
              <CardDescription className="text-gray-600">Monthly revenue over the past year</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <RevenueChart />
            </CardContent>
          </Card>

          {/* User Analytics Chart */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-medium text-gray-900">User Analytics</CardTitle>
              <CardDescription className="text-gray-600">New vs returning users this quarter</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <UserAnalyticsChart />
            </CardContent>
          </Card>

          {/* Traffic Sources Chart */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-medium text-gray-900">Traffic Sources</CardTitle>
              <CardDescription className="text-gray-600">Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <TrafficSourcesChart />
            </CardContent>
          </Card>

          {/* Performance Chart */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-0 rounded-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-medium text-gray-900">Performance Metrics</CardTitle>
              <CardDescription className="text-gray-600">Key performance indicators over time</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <PerformanceChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
