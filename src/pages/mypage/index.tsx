import DashboardHeader from '@/components/header/dashboardHeader';
import SideBar from '@/components/domains/dashboard/sidebar/SideBar';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import ProfileForm from '@/components/domains/mypage/ProfileForm';
import PasswordForm from '@/components/domains/mypage/PasswordForm';
import { AuthProvider } from '@/contexts/AuthProvider';

export default function MyPage() {
  return (
    <AuthProvider>
      <div className="flex w-screen bg-gray-FAFAFA">
        <SideBar />
        <div className="flex flex-col w-full">
          <DashboardHeader type="myDashboard" />
          <main className="grow p-6 md:p-10">
            <Card className="md:max-w-[620px] mb-3">
              <CardTitle className="mb-6 md:mb-8">프로필</CardTitle>
              <ProfileForm />
            </Card>
            <Card className="md:max-w-[620px]">
              <CardTitle className="mb-6 md:mb-8">비밀번호 변경</CardTitle>
              <PasswordForm />
            </Card>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
