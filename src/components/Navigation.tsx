
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Trophy, Apple, Dumbbell, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/leaderboard', icon: Trophy, label: 'Ranking' },
    { path: '/diet-plans', icon: Apple, label: 'Dietas' },
    { path: '/workout-plans', icon: Dumbbell, label: 'Treinos' },
    { path: '/profile', icon: User, label: 'Perfil' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-neutral-200 p-4 z-50">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-5 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`w-full h-auto flex-col space-y-1 py-2 ${
                    isActive 
                      ? 'bg-amber-400 hover:bg-amber-500 text-neutral-950' 
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
