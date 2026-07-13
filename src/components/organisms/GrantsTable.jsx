import React from 'react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '../atoms/Button';

export function GrantsTable({ grants }) {
  return (
    <Card className="overflow-hidden p-0" glass>
      <div className="border-b border-slate-800 p-6">
        <h3 className="text-lg font-semibold text-white">Recent Research Grants</h3>
        <p className="text-sm text-slate-400">Latest active and pending funding allocations</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/50 text-xs font-medium uppercase text-slate-400">
            <tr>
              <th className="px-6 py-4">Project Title</th>
              <th className="px-6 py-4">Investigator</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Progress</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {grants.map((grant) => (
              <tr key={grant.id} className="hover:bg-slate-800/20">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-200">{grant.title}</div>
                  <div className="text-xs text-slate-500">{grant.category} • {grant.id}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-slate-300">{grant.investigator}</div>
                  <div className="text-xs text-slate-500">{grant.institution}</div>
                </td>
                <td className="px-6 py-4 font-medium text-slate-300">{grant.amount}</td>
                <td className="px-6 py-4">
                  <Badge 
                    variant={grant.status === 'Active' ? 'success' : grant.status === 'Pending' ? 'warning' : 'default'}
                  >
                    {grant.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-800">
                      <div 
                        className="h-full rounded-full bg-blue-500" 
                        style={{ width: `${grant.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-400">{grant.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                    <MoreHorizontal size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
