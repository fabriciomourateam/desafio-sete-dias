
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { id: 1, name: 'Ana Silva', points: 4520, avatar: '', rank: 1, streak: 7 },
    { id: 2, name: 'Carlos Santos', points: 4350, avatar: '', rank: 2, streak: 6 },
    { id: 3, name: 'Maria Oliveira', points: 4100, avatar: '', rank: 3, streak: 5 },
    { id: 4, name: 'João Pedro', points: 3850, avatar: '', rank: 4, streak: 4 },
    { id: 5, name: 'Lucia Costa', points: 3600, avatar: '', rank: 5, streak: 7 },
    { id: 6, name: 'Roberto Lima', points: 3400, avatar: '', rank: 6, streak: 3 },
    { id: 7, name: 'Fernanda Souza', points: 3200, avatar: '', rank: 7, streak: 5 },
    { id: 8, name: 'Pedro Alves', points: 3000, avatar: '', rank: 8, streak: 2 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <Award className="w-6 h-6 text-neutral-400" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-amber-500';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400';
      case 3:
        return 'bg-gradient-to-r from-amber-500 to-orange-500';
      default:
        return 'bg-neutral-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-amber-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-neutral-950 mb-2">
            Ranking dos Campeões
          </h1>
          <p className="text-neutral-600">
            Veja como você está se saindo no desafio de 7 dias
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <Card 
              key={user.id} 
              className={`border-0 shadow-xl ${getRankColor(user.rank)} text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  {getRankIcon(user.rank)}
                </div>
                <CardTitle className="text-lg font-bold">#{user.rank}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-3 border-4 border-white/30">
                  <AvatarFallback className="bg-white/20 text-white font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-1">{user.name}</h3>
                <p className="text-2xl font-bold mb-2">{user.points.toLocaleString()} pts</p>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {user.streak} dias seguidos
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Complete Leaderboard */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-neutral-950 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-amber-500" />
              Classificação Geral
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboardData.map((user) => (
                <div 
                  key={user.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                    user.rank <= 3 
                      ? 'bg-amber-50 border-2 border-amber-200' 
                      : 'bg-white border border-neutral-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 font-bold text-neutral-700">
                      {user.rank}
                    </div>
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-amber-100 text-amber-800 font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-neutral-950">{user.name}</h3>
                      <p className="text-sm text-neutral-600">{user.streak} dias de sequência</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-neutral-950">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-neutral-600">pontos</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
