import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarSeparator } from "@/components/ui/sidebar";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="w-1/2 text-center">
        <CardHeader>
          <CardTitle>ระบบลงทะเบียนเรียน CPE &amp; ISNE</CardTitle>
        </CardHeader>
        <Button className="mx-auto mb-4 w-1/2" render={<Link to="/enrollment" />}>
          ไปหน้าลงทะเบียนเรียน
        </Button>
      </Card>
      <p className="text-center text-xs text-muted-foreground">จัดทำโดย Chawis Jirathitikul รหัสนักศึกษา 680610666</p>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="mt-auto w-full space-y-4">
        <SidebarSeparator />
        <p className="text-center text-xs text-muted-foreground">
          จัดทำโดย Chawis Jirathitikul รหัสนักศึกษา 680610666
        </p>
      </div>
    </div>
  );
}