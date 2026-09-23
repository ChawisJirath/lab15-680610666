import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarSeparator } from "@/components/ui/sidebar";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col items-center gap-4">
      <Card className="w-1/2 text-center">
        <CardHeader>
          <CardTitle>ระบบลงทะเบียนเรียน CPE &amp; ISNE</CardTitle>
        </CardHeader>
        <Button className="mx-auto mb-4 w-1/2" render={<Link to="/enrollment" />}>
          ไปหน้าลงทะเบียนเรียน
        </Button>
      </Card>
      <p className="text-center text-xs text-muted-foreground">จัดทำโดย Chawis Jirathitikul รหัสนักศึกษา 680610666</p>
      <div className="mt-auto w-full translate-y-4 space-y-4">
        <SidebarSeparator />
        <p className="text-center text-xs text-muted-foreground">
          จัดทำโดย Chawis Jirathitikul รหัสนักศึกษา 680610666
        </p>
      </div>
    </div>
    
  );
}