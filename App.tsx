import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription } from './components/ui/alert';
import { Progress } from './components/ui/progress';
import { Separator } from './components/ui/separator';
import { Switch } from './components/ui/switch';
import { Label } from './components/ui/label';
import { AuthProvider } from './components/auth-provider';
import { Dashboard } from './components/dashboard';
import { KYCVerification } from './components/kyc-verification';
import { ComplianceHub } from './components/compliance-hub';
import { TransactionMonitoring } from './components/transaction-monitoring';
import { RiskAssessment } from './components/risk-assessment';
import { ReportingCenter } from './components/reporting-center';
import { SettingsPanel } from './components/settings-panel';
import { LoginForm } from './components/login-form';
import { Shield, Lock, TrendingUp, AlertTriangle, Globe, Zap, Brain, BarChart3 } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <h2 className="text-2xl text-white">Initializing Quantum Crypto Platform...</h2>
          <Progress value={85} className="w-64 mx-auto" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-center space-x-3 mb-6">
                <Shield className="h-12 w-12 text-blue-500" />
                <h1 className="text-4xl text-white">Quantum Crypto</h1>
              </div>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Next-Generation Cryptocurrency Fraud Detection & Compliance Platform
              </p>
              <div className="flex justify-center space-x-8 mt-8">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Lock className="h-5 w-5" />
                  <span>Quantum-Resistant Security</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Brain className="h-5 w-5" />
                  <span>AI-Powered Detection</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Globe className="h-5 w-5" />
                  <span>Global Compliance</span>
                </div>
              </div>
            </div>

            {/* Feature Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle className="text-white">Real-Time Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">Live transaction tracking across all major blockchains with instant risk scoring.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <Shield className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle className="text-white">KYC Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">Comprehensive customer verification with biometric authentication and PEP screening.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <AlertTriangle className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle className="text-white">Fraud Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">AI-powered pattern recognition and anomaly detection for fraud prevention.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <BarChart3 className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle className="text-white">Compliance Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">Automated regulatory reporting with FATF Travel Rule compliance.</p>
                </CardContent>
              </Card>
            </div>

            {/* Login Form */}
            <LoginForm onLogin={handleLogin} />

            {/* Platform Stats */}
            <div className="mt-12 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl text-blue-500 mb-2">500M+</div>
                  <div className="text-slate-400">Transactions Monitored</div>
                </div>
                <div>
                  <div className="text-3xl text-green-500 mb-2">150+</div>
                  <div className="text-slate-400">Countries Supported</div>
                </div>
                <div>
                  <div className="text-3xl text-purple-500 mb-2">99.9%</div>
                  <div className="text-slate-400">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl text-orange-500 mb-2">24/7</div>
                  <div className="text-slate-400">Real-Time Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-900">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-500" />
              <h1 className="text-xl text-white">Quantum Crypto</h1>
              <Badge variant="outline" className="text-green-400 border-green-400">
                <Zap className="h-3 w-3 mr-1" />
                Live
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">
                User: {currentUser?.email || 'admin@quantumcrypto.com'}
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-400">
                {currentUser?.country || 'United States'}
              </Badge>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="container mx-auto px-6 py-8">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid grid-cols-7 w-full bg-slate-800">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              <TabsTrigger value="kyc">KYC</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <Dashboard currentUser={currentUser} />
            </TabsContent>

            <TabsContent value="monitoring">
              <TransactionMonitoring />
            </TabsContent>

            <TabsContent value="kyc">
              <KYCVerification />
            </TabsContent>

            <TabsContent value="compliance">
              <ComplianceHub currentUser={currentUser} />
            </TabsContent>

            <TabsContent value="risk">
              <RiskAssessment />
            </TabsContent>

            <TabsContent value="reports">
              <ReportingCenter />
            </TabsContent>

            <TabsContent value="settings">
              <SettingsPanel currentUser={currentUser} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </AuthProvider>
  );
}